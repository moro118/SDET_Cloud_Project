/**
 * Project: Cloud-Based Audit Management System
 * Author: Moroni Amon Villalobos Ortega
 * Description: SDET tool to manage system audits using MongoDB Atlas.
 * Requirements: CRUD Operations, Cloud Connectivity, 100+ Lines of Code.
 */

const mongoose = require('mongoose');

// --- CONFIGURATION ---
// Replace with your MongoDB Atlas Connection String
const MONGO_URI = "mongodb://admin:admin@ac-dr5djpd-shard-00-00.42gyf7y.mongodb.net:27017,ac-dr5djpd-shard-00-01.42gyf7y.mongodb.net:27017,ac-dr5djpd-shard-00-02.42gyf7y.mongodb.net:27017/?ssl=true&replicaSet=atlas-gucioa-shard-0&authSource=admin&appName=Cluster0";

// --- DATA MODEL (Data Class equivalent in JS) ---
const auditSchema = new mongoose.Schema({
    auditId: { type: Number, required: true },
    systemName: { type: String, required: true },
    status: { type: String, required: true },
    isResolved: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
});

const Audit = mongoose.model('Audit', auditSchema);

// --- CRUD OPERATIONS ---

// 1. CREATE: Push a new audit to the cloud
async function createAudit(id, name, status) {
    try {
        const newAudit = new Audit({ auditId: id, systemName: name, status: status });
        const savedAudit = await newAudit.save();
        console.log(">>> [CREATE] Success: Audit saved to Cloud:", savedAudit.auditId);
    } catch (error) {
        console.error(">>> [CREATE] Error:", error.message);
    }
}

// 2. READ: Fetch all audits from the database
async function readAudits() {
    try {
        const audits = await Audit.find();
        console.log("\n>>> [READ] Displaying All Cloud Records:");
        console.table(audits.map(a => ({ ID: a.auditId, System: a.systemName, Status: a.status, Resolved: a.isResolved })));
    } catch (error) {
        console.error(">>> [READ] Error:", error.message);
    }
}

// 3. UPDATE: Modify an existing record (Mark as Resolved)
async function resolveAudit(id) {
    try {
        const updated = await Audit.findOneAndUpdate({ auditId: id }, { isResolved: true }, { new: true });
        if (updated) {
            console.log(`>>> [UPDATE] Audit ${id} has been marked as RESOLVED.`);
        } else {
            console.log(`>>> [UPDATE] Audit ${id} not found.`);
        }
    } catch (error) {
        console.error(">>> [UPDATE] Error:", error.message);
    }
}

// 4. DELETE: Remove an obsolete record
async function deleteAudit(id) {
    try {
        const deleted = await Audit.findOneAndDelete({ auditId: id });
        if (deleted) {
            console.log(`>>> [DELETE] Audit ${id} removed from Cloud storage.`);
        }
    } catch (error) {
        console.error(">>> [DELETE] Error:", error.message);
    }
}

// --- MAIN EXECUTION FLOW ---
async function main() {
    console.log("Connecting to MongoDB Atlas...");
    
    await mongoose.connect(MONGO_URI)
        .then(() => console.log("Connected Successfully to the Cloud Database!"))
        .catch(err => console.error("Connection Failed:", err));

    // Demo Sequence for Video
    console.log("\n--- STARTING SDET CLOUD DEMO ---");
    
    await createAudit(101, "Mainframe_Alpha", "PASS");
    await createAudit(102, "Database_Beta", "FAIL");
    
    await readAudits();
    
    await resolveAudit(102); // Fix the failing audit
    
    await readAudits();
    
    await deleteAudit(101); // Cleanup
    
    await readAudits();

    console.log("\n--- DEMO COMPLETE ---");
    mongoose.connection.close();
}

// Execution trigger
main();