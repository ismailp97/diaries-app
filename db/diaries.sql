DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    entry_date DATE NOT NULL,
    PRIMARY KEY(diary_id)
);

INSERT INTO diary_entries (title, content, entry_date) 
VALUES 
('Entry 1', 'This is the first diary entry.', '2024-01-01'),
('Entry 2', 'Another day, day 2.', '2024-01-02'),
('Entry 3', 'This is the third day.', '2024-01-03');
