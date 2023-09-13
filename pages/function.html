<?php

$conn = mysqli_connect("localhost", "root", "", "db_invention");

function registrasi($data) {
    global $conn;   
    $Email = $data["email"];
    $Username = Strtolower(stripslashes($data["username"]));
    $Password = mysqli_real_escape_string($conn, $data["password"]);
    $Password2 = mysqli_real_escape_string($conn, $data["password2"]);

    //cek username sudah ada atau belum
    $result = mysqli_query($conn, "SELECT * FROM data_user WHERE user = '$Username'");
    if(mysqli_fetch_assoc($result)) {
        echo "<script>
                alert('Username Sudah Terdaftar!');
              </script>";
        return false;
    }

    //logic konfirmasi password
    if($Password !== $Password2) {
        echo "<script>
                alert('Konfirmasi Password Tidak Sesuai!');
              </script>";

        return false;
    }

    //enkripsi password
    $Password_enkripsi = password_hash($Password2, PASSWORD_DEFAULT);

    //menambahkan user baru kedalam database
    mysqli_query($conn, "INSERT INTO data_user VALUES('', '$Email','$Username','$Password_enkripsi')");
    return mysqli_affected_rows($conn);
}

function message($data) {
    global $conn;

    $Nama = $data['nama_contact'];
    $Email = $data['email_contact'];
    $Message = $data['message_contact'];

    //mengirim data contact ke database
    mysqli_query($conn, "INSERT INTO data_user VALUES('', '$Nama', '$Email', '$Message')");
    return mysqli_affected_rows($conn);
}

?>