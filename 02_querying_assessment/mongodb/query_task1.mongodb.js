// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//ก็คือโจทย์ให้หาเมนูใดบ้างที่มีราคาต่ำกว่า 10 สิ่งที่จะเขียน query คือค้นหาเมนูอาหารจาก collection ชื่อ menu_items ที่มีราคาน้อยกว่า 10 โดยจะเขียนดังนี้

use("chrome-burger-db"); //เรียกใช้databaseอันนี้

db.menu_items.find({price:{$lt:10}}).sort({price:-1}); //เพื่อค้นหา Documentsใน Collection ที่ชื่อว่า menu_items โดยใช้ find() เพื่อหาหลายอันและกำหนดเงื่อนไขให้ฟิลด์ price มีค่าน้อยกว่า 10 และใช้ sort() เพื่อให้ข้อมูลที่ออกมาอ่านง่าย โดยกำหนดเงื่อนไข -1 คือ ให้เรียงฟิลด์จากมากสุดลงไปน้อยสุด
