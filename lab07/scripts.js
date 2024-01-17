document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {//ตรวจสอบว่า todo ไม่เป็นสตริงค่าว่าง
            const todoItem = {

                text: todoText,
                completed: false,
            };
            todos.push(todoItem); // เพิ่มtodoitem ลงในอาเรย์
            renderTodoList(); // แสดงรายการ todo ทั้งหมด
            todoInput.value = ""; //ล้างค่า input เป็นสตริงว่างเพื่อล้างค่าที่ผู้ใช้ป้อนใน input
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);//ลบรายการ todo ที่อยู่ในตำแหน่ง index จากอาร์เรย์ todos
        renderTodoList();//แสดงผลรายการ todo ที่เหลือหลังจากที่รายการถูกลบ.
    }
    // ตรวจสอบยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos);//แสดงผลข้อมูลที่อยู่ในตัวแปร todos ลงใน Console ของเบราว์เซอร์หรือโปรแกรมที่รัน 
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];//ดึงข้อมูลของ todo ที่ตำแหน่ง i จากอาร์เรย์ todos
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";//สร้างปุ่มเสร็จและปุ่มยกเลิก
            completeButton.addEventListener("click", () => toggleComplete(i));
            listItem.appendChild(completeButton);//เพิ่มปุ่มเสร็จ
            listItem.appendChild(deleteButton);//เพิ่มปุ่มลบ
            todoList.appendChild(listItem);
        }
    }
    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});