$(document).ready(function() {
    $("#personInfoForm").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "MANDATORY",
                    minlength: "The name should have at least 2 characthers"
                }
            }
        }

    );

})