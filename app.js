// พิมพ์ดาวให้ได้แถวตามจำนวน input
// ตัวอย่าง input 5 ouput :
// *
// **
// ***
// ****
// *****



function starLogF(input) {
    let starLog = ''
    for (let i = 1; i <= input; i++) {
        starLog += '*'
        console.log(starLog);

    }
    return ' ';
}


starLogF(7)
console.log(`starLogF(5) <= โปรดเปลี่ยนแปลงตัวเลขภายในฟังชั่น`);