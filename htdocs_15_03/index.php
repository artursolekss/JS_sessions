<?php

$con = new mysqli("localhost", "root", "", "jslessons");
if ($con->connect_error)
    die("Connection error" . $con->connect_error);

if (
    isset($_POST["firstname"]) && $_POST["firstname"] !== ""
    && isset($_POST["lastname"]) && $_POST["lastname"] !== ""
) :
$sql = "INSERT INTO persons (firstname,lastname) VALUES ('{$_POST["firstname"]}','{$_POST["lastname"]}')";
$con->query($sql);
endif;

$sql = "SELECT * FROM persons";
$result = $con->query($sql);
?>
<html>

<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>

<body>
    <table border="1px">
        <tr>
            <th>
                <h3>First Name</h3>
            </th>
            <th>
                <h3>First Name</h3>
            </th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) :
        ?>
            <tr>
                <td><?= $row["firstname"] ?></td>
                <td><?= $row["lastname"] ?></td>
            </tr>
        <?php
        endwhile;
        ?>
    </table>
    <form method="POST">
        <label for="firstname">First Name</label>
        <input id="firstname" name="firstname">
        <label for="lastname">Last Name</label>
        <input id="lastname" name="lastname">
        <button type="submit">Save</button>
    </form>
</body>
<?php
$con->close();
?>

</html>