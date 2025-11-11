function fn_ValForm()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var pattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
  
    if(name == "")
    {
        alert("Nama belum diisi.");
        return false;
    }
    else if (email == "")
    {
        alert("Email belum diisi.");
        return false;
    }
    else if (message == "")
    {
        alert("Pesan belum diisi.");
        return false;
    }
    else if (!pattern.test(email.toLowerCase()))
    {
        alert("Format email tidak valid. Contoh format email valid: username@example.com");
        return false;
    }
    else
    {
        alert("Data berhasil disimpan.");
        return true;
    }
}  