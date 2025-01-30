import pool from "../config/db";
import { verifyReqUser } from "../middlewares/authMiddleware";

export const getUserGroups = async (req, res) => {
    verifyReqUser(req, res, async () => {
        const { userId } = req.params;
        try {
            const [ rows, _ ] = await pool.execute(
                "SELECT * FROM groups g\
                JOIN user_to_groups utg ON utg.group_id = g.id\
                WHERE utg.user_id = ?", [userId]
            );
            if (rows.length > 0) {
                res.status(200).json(rows);
            } else {
                res.status(404).json({ message: "User is not in any groups" });
            }
        } catch (err) {
            res.status(500).json(
                { message: "Server error getting user's groups" }
            )
        }
    })
}