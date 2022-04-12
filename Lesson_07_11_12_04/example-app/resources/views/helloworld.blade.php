@extends('layouts.main')

@section('content')
<table border="1">
    <tr>
        <th>ID</th>
        <th>Role</th>
        <th>Salary</th>
    </tr>
    <?php
    foreach ($employees as $employee) :
    ?>
        <tr>
            <td>{{ $employee->id }}</td>
            <td>{{ $employee->role }}</td>
            <td>{{ $employee->salary }}</td>
        </tr>
    <?php
    endforeach;
    ?>
</table>
@endsection