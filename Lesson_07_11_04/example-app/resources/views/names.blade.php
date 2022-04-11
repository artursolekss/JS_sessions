@extends('layouts.main')

@section('content')
<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
    </tr>
    <?php
    foreach ($names as $person) :
    ?>
        <tr>
            <td>{{ $person->id }}</td>
            <td>{{ $person->name }}</td>
            <td>{{ $person->lastname}}</td>
            <td>{{ $person->dob}}</td>
        </tr>
    <?php
    endforeach;
    ?>
</table>

<form method="POST" action="add-name">
    @csrf
    <label>
        Name:
        <input name="name" />
    </label>
    <label>
        Last Name:
        <input name="lastname" />
    </label>
    <label>
        Date of Birth:
        <input name="dob" type="date" />
    </label>
    <button class="btn">Add name</button>
</form>
@endsection