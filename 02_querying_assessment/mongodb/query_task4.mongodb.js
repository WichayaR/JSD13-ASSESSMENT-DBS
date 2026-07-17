// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//จากโจทย์ต้องการเห็น revenue summary

use("chrome-burger-db"); //ใช้ database อันนี้

db.orders.aggregate([
    {
    $group:{
        _id: null,
        total_revenue:{$sum:"$total_price"}
    }
    }
]); //ใช้ aggregate() ใน Collection orders เพื่อทำการคำนวณ และใช้ $group โดยกำหนดค่า _id:_null เพื่อให้ document ของ orders มารวมกัน แล้วสร้างฟิลด์ใหม่ตามโจทย์คือ total_revenue ใช้ $sum อ้างอิงไปที่ฟิลด์ $total_price เพื่อดึงราคาใน orders มาบวกกันทุกตัวเพื่อหาผลลัพธ์ให้ไปแสดงที่ฟิลด์ใหม่ที่สร้าง