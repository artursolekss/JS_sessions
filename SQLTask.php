<?php

$con = new mysqli("localhost", "root", "", "test");
if ($con->connect_error)
    die("Connection error" . $con->connect_error);

if (
    isset($_POST["Name"]) && $_POST["Name"] !== ""
    && isset($_POST["LastName"]) && $_POST["LastName"] !== ""
    && isset($_POST["DateOfBirth"]) && $_POST["DateOfBirth"] !== ""
) :
    $stmt = $con->prepare("INSERT INTO persons (Name, LastName, DateOfBirth) VALUES (?,?,?)");
    $stmt->bind_param("sss",$_POST["Name"], $_POST["LastName"], $_POST["DateOfBirth"]);
    $stmt->execute();
    // $sql_person = "INSERT INTO persons (Name, LastName, DateOfBirth) VALUES ('{$_POST["Name"]}','{$_POST["LastName"]}','{$_POST["DateOfBirth"]}')";
    // $con->query($sql_person);
endif;


if (
    isset($_POST['submit'])
    && isset($_POST["Person"]) && $_POST["Person"] !== ""
    && isset($_POST["Role"]) && $_POST["Role"] !== ""
    && isset($_POST["Salary"]) && $_POST["Salary"] !== ""
) :
    $insert = "INSERT INTO employees (Person, Role, Salary) VALUES ('{$_POST["Person"]}', '{$_POST["Role"]}' , '{$_POST["Salary"]}')";
    $con->query($insert);
endif;

$sql_person = "SELECT * FROM persons";
$result_person = $con->query($sql_person);

$sql_employee = "SELECT * FROM employees";
$result_employee = $con->query($sql_employee);


?>

<html>

<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>

<body>
    <table border="1px">
        <tr>
            <th>
                <h3>ID</h3>
            </th>
            <th>
                <h3>First Name</h3>
            </th>
            <th>
                <h3>Last Name</h3>
            </th>
            <th>
                <h3>Date Of Birth</h3>
            </th>
        </tr>
        <?php
        while ($row = $result_person->fetch_assoc()) :
        ?>
            <tr>
                <td><?= $row["ID"] ?></td>
                <td><?= $row["Name"] ?></td>
                <td><?= $row["LastName"] ?></td>
                <td><?= $row["DateOfBirth"] ?></td>
            </tr>
        <?php
        endwhile;
        ?>
    </table>

    <br>
    <table border="1px">
        <tr>
            <th>
                <h3>employeeID</h3>
            </th>
            <th>
                <h3>Person</h3>
            </th>
            <th>
                <h3>Role</h3>
            </th>
            <th>
                <h3>Salary</h3>
            </th>
        </tr>
        <?php
        while ($row = $result_employee->fetch_assoc()) :
        ?>
            <tr>
                <td><?= $row["employeeID"] ?></td>
                <td><?= $row["Person"] ?></td>
                <td><?= $row["Role"] ?></td>
                <td><?= $row["Salary"] ?></td>
            </tr>
        <?php
        endwhile;
        ?>
    </table>

    <form method="POST">
        <label for="Name">First Name</label>
        <input id="Name" name="Name">
        <label for="LastName">Last Name</label>
        <input id="LastName" name="LastName">
        <label for="DateOfBirth">Date Of Birth</label>
        <input id="DateOfBirth" name="DateOfBirth" type="date">
        <button type="submit">Submit</button>
    </form>

    <br>

    <form method="POST">
        <label for="Person"> Person</label>
        <select name="Person" id="Person">
            <option>Select a person by ID</option>
            <?php foreach ($result_person as $key => $value) { ?>
                <option value="<?= $value['ID']; ?>"><?= $value['Name'], ' ', $value['LastName']; ?></option>
            <?php } ?>
        </select>


        <label for="Role"> Role</label>
        <input id="Role" name="Role">
        <label for="Salary"> Salary</label>
        <input id="Salary" name="Salary">
        <button type="submit" name="submit">Submit</button>

    </form>




</body>

<?php
$con->close();
?>

</html>