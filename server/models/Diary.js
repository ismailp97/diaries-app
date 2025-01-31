const db = require("../../db/connect")

class Diary {
    constructor({diary_id, title = "entertitle", content = "text", entry_date = "01-01-2025"}) {
        this.diary_id = diary_id
        this.title = title
        this.content = content
        this.entry_date = entry_date
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary_entries;")
        if(response.rows.length === 0){
            throw new Error("No diaries available")
        }
        return response.rows.map(d => new Diary(d))
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary_entries WHERE diary_id = $1;", [id])
        if(response.rows.length != 1){
            throw new Error("Unable to locate diary")
        }
        return new Diary(response.rows[0])
    }

    static async create(data) {
        const { title, content, entry_date } = data;
    
        const response = await db.query("INSERT INTO diary_entries (title, content, entry_date) VALUES ($1, $2, $3) RETURNING *;", [title, content, entry_date]);
    
        return new Diary(response.rows[0]);
    }

    async destroy() {
        const response = await db.query("DELETE FROM diary_entries WHERE diary_id = $1 RETURNING *;", [this.diary_id])
        return new Diary(response.rows[0])
    }

}

module.exports = Diary