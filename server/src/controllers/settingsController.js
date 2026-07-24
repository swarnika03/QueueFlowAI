import Settings from "../models/Settings.js";
import Branch from "../models/Branch.js";
import Counter from "../models/Counter.js";


// =======================================
// GET SETTINGS
// =======================================

export const getSettings = async (req, res) => {

    try {

        let settings = await Settings.findOne();

        // Create default settings if none exist
        if (!settings) {

            settings = await Settings.create({
                averageServiceTime: 5,
            });

        }

        // Get first branch
        const branch = await Branch.findOne();

        // Count active counters
        const counterCount = await Counter.countDocuments({
            isActive: true,
        });

        res.json({

            profile: {

                name: req.user.name,
                email: req.user.email,
                role: req.user.role,

            },

            queueSettings: {

                averageServiceTime:
                    settings.averageServiceTime,

            },

            notifications:
                settings.notifications,

            branch: {

                name:
                    branch?.name || "Not Available",

                workingHours:
                    "9:00 AM - 6:00 PM",

                counters:
                    counterCount,

            },

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};


// =======================================
// UPDATE QUEUE SETTINGS
// =======================================

export const updateQueueSettings = async (req, res) => {

    try {

        const { averageServiceTime } = req.body;

        let settings = await Settings.findOne();

        if (!settings) {

            settings = await Settings.create({});

        }

        settings.averageServiceTime =
            averageServiceTime;

        await settings.save();

        res.json({

            message:
                "Queue settings updated successfully",

            settings,

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};


// =======================================
// UPDATE NOTIFICATION SETTINGS
// =======================================

export const updateNotificationSettings =
async (req, res) => {

    try {

        const {

            email,

            browser,

            sound,

        } = req.body;

        let settings = await Settings.findOne();

        if (!settings) {

            settings = await Settings.create({});

        }

        settings.notifications.email =
            email;

        settings.notifications.browser =
            browser;

        settings.notifications.sound =
            sound;

        await settings.save();

        res.json({

            message:
                "Notification settings updated",

            notifications:
                settings.notifications,

        });

    }

    catch (error) {

        res.status(500).json({

            message:
                error.message,

        });

    }

};