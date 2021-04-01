let nut_dk = document.getElementById("nut_dk");
nut_dk.addEventListener('click', function () {
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let mat_khau = document.getElementById("mat_khau").value;
    let ngay_sinh = document.getElementById("ngay_sinh").value;
    let thang_sinh = document.getElementById("thang_sinh").value;
    let nam_sinh = document.getElementById("nam_sinh").value;
    let thieu_ho = document.getElementById("thieu_ho");
    let thieu_ten = document.getElementById("thieu_ten");
    let thieu_email = document.getElementById("thieu_email");
    let thieu_mk = document.getElementById("thieu_mk");

    if (first_name == '') {
        thieu_ho.innerText = "Vui lòng nhập Họ";
    };
    if (last_name == '') {
        thieu_ten.innerText = "Vui lòng nhập tên";
    };
    if (email == '') {
        thieu_email.innerText = "Vui lòng nhập email";
    };
    if (mat_khau == '') {
        thieu_mk.innerText = "Vui lòng nhập mật khẩu";
    };

    if (first_name != '' && last_name != '' && email != '' && mat_khau != '' && ngay_sinh != '' && thang_sinh != '' && nam_sinh != '') {
        if (document.getElementById("gt_nam").checked) {
            document.write(`Chào mừng anh ${first_name} ${last_name} đã đăng ký thành công! <br>`);
            document.write(`Họ và tên: ${first_name} ${last_name}<br>`);
            document.write(`Email: ${email}<br>`);
            document.write(`Ngày sinh: ${ngay_sinh}/${thang_sinh}/${nam_sinh}`)
        };
        if (document.getElementById("gt_nu").checked) {
            document.write(`Chào mừng chị ${first_name} ${last_name} đã đăng ký thành công! <br>`);
            document.write(`Họ và tên: ${first_name} ${last_name}<br>`);
            document.write(`Email: ${email}<br>`);
            document.write(`Ngày sinh: ${ngay_sinh}/${thang_sinh}/${nam_sinh}`)
        };

    }
})