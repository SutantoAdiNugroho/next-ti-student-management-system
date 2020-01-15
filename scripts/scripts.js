var idStudent = document.getElementById('student-id')
var address = document.getElementById('address')
var fullName = document.getElementById('full-name')
var password = document.getElementById('password')
var dateOfBirth = document.getElementById('date-of-birth')
var confirmPassword = document.getElementById('confirm-password')
var faculty = document.getElementById('faculty')

var tableIdStudent = document.getElementById('id-update')
var tableFullName = document.getElementById('fullname-update')
var tableFaculty = document.getElementById('faculty-update')
var tableDateOfBirth = document.getElementById('date-birth-update')
var tableAdress = document.getElementById('address-update')
var showAllButtonAction = document.getElementById('id-show-button')
var showAllDataAction = document.getElementById('id-show-data-student')

var buttonUpdate = document.getElementById('btn-update-id')
var buttonSaveUpdate = document.getElementById('btn-save-update-id')

function saveStudents() {
    var facultyIndex = faculty.selectedIndex
    
    if (idStudent.value == "" || address.value == "" || fullName.value == "" || password.value == "" || dateOfBirth == "" || confirmPassword == "" || faculty == "") {
        alert("Make sure this data is filled in correctly!")
    } else if (password.value != confirmPassword.value) {
        alert("Please confirm the password correctly!")
    } else {
        alert("Add success")
        localStorage.setItem("id_student", idStudent.value)
        localStorage.setItem("address", address.value)
        localStorage.setItem("fullname", fullName.value)
        localStorage.setItem("password", password.value)
        localStorage.setItem("date_of_birth", dateOfBirth.value)
        localStorage.setItem("confirm_password", confirmPassword.value)
        localStorage.setItem("faculty", faculty.value)
        localStorage.setItem("facultyIndex", facultyIndex)

        window.location.href = "../studentsdata.html"
    }
}

function showStudents() {
    const isCreate = localStorage.getItem('id_student');

    tableIdStudent.defaultValue = localStorage.getItem('id_student')
    tableFullName.defaultValue = localStorage.getItem('fullname')
    tableFaculty.selectedIndex = localStorage.getItem('facultyIndex')
    tableDateOfBirth.defaultValue = localStorage.getItem('date_of_birth')
    tableAdress.defaultValue = localStorage.getItem('address')

    if (!isCreate) {
        showAllButtonAction.style.visibility = "hidden"
        showAllDataAction.style.visibility = "hidden"
    } else {
        showAllButtonAction.style.visibility = "visible"
        showAllDataAction.style.visibility = "visible"
    }
}

function updateStudents() {
    tableIdStudent.disabled = false
    tableFullName.disabled = false
    tableFaculty.disabled = false
    tableDateOfBirth.disabled = false
    tableAdress.disabled = false

    buttonUpdate.style.display = "none"
    buttonSaveUpdate.style.display = "inline"
}

function saveUpdateStudents() {
    if (tableIdStudent.value == "" || tableFullName.value == "" || tableFaculty.value == "" || tableDateOfBirth.value == "" || tableAdress.value == "") {
        alert("Make sure this data is filled in correctly!")
    } else {
        alert("Success update data")
        tableIdStudent.disabled = true
        tableFullName.disabled = true
        tableFaculty.disabled = true
        tableDateOfBirth.disabled = true
        tableAdress.disabled = true

        localStorage.setItem("id_student", tableIdStudent.value)
        localStorage.setItem("address", tableAdress.value)
        localStorage.setItem("fullname", tableFullName.value)
        localStorage.setItem("date_of_birth", tableDateOfBirth.value)
        localStorage.setItem("facultyIndex", tableFaculty.selectedIndex)

        buttonUpdate.style.display = "inline"
        buttonSaveUpdate.style.display = "none"
    }
}

function deleteStudents() {    
    var confirmDelete = confirm("Are you sure to delete this student?");
    if (confirmDelete == true)
        localStorage.clear()
        showStudents()
}

function isNumericKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return true;
        return false;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
}

showStudents()