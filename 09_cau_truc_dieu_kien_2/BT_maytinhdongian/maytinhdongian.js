let ket_qua = document.getElementById("ket_qua");
        let nut_so_0 = document.getElementById("so_0");
        nut_so_0.addEventListener('click', function(){
            let gtri_0 = +document.getElementById("so_0").value;
            ket_qua.innerText += gtri_0;
        })
        let nut_so_1 = document.getElementById("so_1");
        nut_so_1.addEventListener('click', function(){
            let gtri_1 = +document.getElementById("so_1").value;
            ket_qua.innerText += gtri_1;
        })
        let nut_so_2 = document.getElementById("so_2");
        nut_so_2.addEventListener('click', function(){
            let gtri_2 = +document.getElementById("so_2").value;
            ket_qua.innerText += gtri_2;
        })
        let nut_so_3 = document.getElementById("so_3");
        nut_so_3.addEventListener('click', function(){
            let gtri_3 = +document.getElementById("so_3").value;
            ket_qua.innerText += gtri_3;
        })
        let nut_so_4 = document.getElementById("so_4");
        nut_so_4.addEventListener('click', function(){
            let gtri_4 = +document.getElementById("so_4").value;
            ket_qua.innerText += gtri_4;
        })
        let nut_so_5 = document.getElementById("so_5");
        nut_so_5.addEventListener('click', function(){
            let gtri_5 = +document.getElementById("so_5").value;
            ket_qua.innerText += gtri_5;
        })
        let nut_so_6 = document.getElementById("so_6");
        nut_so_6.addEventListener('click', function(){
            let gtri_6 = +document.getElementById("so_6").value;
            ket_qua.innerText += gtri_6;
        })
        let nut_so_7 = document.getElementById("so_7");
        nut_so_7.addEventListener('click', function(){
            let gtri_7 = +document.getElementById("so_7").value;
            ket_qua.innerText += gtri_7;
        })
        let nut_so_8 = document.getElementById("so_8");
        nut_so_8.addEventListener('click', function(){
            let gtri_8 = +document.getElementById("so_8").value;
            ket_qua.innerText += gtri_8;
        })
        let nut_so_9 = document.getElementById("so_9");
        nut_so_9.addEventListener('click', function(){
            let gtri_9 = +document.getElementById("so_9").value;
            ket_qua.innerText += gtri_9;
        })
        let nut_dau_cong = document.getElementById("dau_cong");
        nut_dau_cong.addEventListener('click', function(){
            let nut_cong = +document.getElementById("dau_cong").value;
            ket_qua.innerText += '+';
        })
        let nut_dau_tru = document.getElementById("dau_tru");
        nut_dau_tru.addEventListener('click', function(){
            let nut_tru = +document.getElementById("dau_tru").value;
            ket_qua.innerText += '-';
        })
        let nut_dau_nhan = document.getElementById("dau_nhan");
        nut_dau_nhan.addEventListener('click', function(){
            let nut_nhan = +document.getElementById("dau_nhan").value;
            ket_qua.innerText += '*';
        })
        let nut_dau_chia = document.getElementById("dau_chia");
        nut_dau_chia.addEventListener('click', function(){
            let nut_chia = +document.getElementById("dau_chia").value;
            ket_qua.innerText += '/';
        })
        let nut_dau_bang = document.getElementById("dau_bang");
        nut_dau_bang.addEventListener('click', function(){
            let gtri_1 = +document.getElementById("dau_bang").value;
            ket_qua.innerText = eval(ket_qua.innerText);
        })
        let nut_dau_AC = document.getElementById("nut_AC");
        nut_dau_AC.addEventListener('click', function(){
            let gtri_1 = +document.getElementById("nut_AC").value;
            ket_qua.innerText = '';
        })