// قائمة المستخدمين المشرفين والمطورين
const adminsAndDevelopers = ["admin1", "admin2", "developer1", "developer2"];

// الدالة التي تقوم بتغيير الصورة في البروفايل
function changeProfilePicture(username, newPicture) {
    // التحقق مما إذا كان المستخدم مشرفًا أو مطورًا
    if (adminsAndDevelopers.includes(username)) {
        // تغيير الصورة في البروفايل
        console.log("تم تغيير صورة البروفايل للمستخدم: " + username + " إلى " + newPicture);
    } else {
        console.log("لا يمكنك تغيير الصورة في البروفايل، يجب أن تكون مشرفًا أو مطورًا.");
    }
}

// استخدام الدالة لتغيير الصورة في البروفايل
const requestedUsername = prompt("الرجاء إدخال اسم المستخدم:");
const requestedPicture = prompt("الرجاء إدخال الصورة الجديدة:");
changeProfilePicture(requestedUsername, requestedPicture);
