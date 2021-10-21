
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function() {

        $("#btnregister").click(() => {
            $("#btnregister").addClass("animate__animated animate__heartBeat")
            alert('Registration Successful!')
        });
        $("#btnlogin").click(() => {
            $("#btnlogin").addClass("animate__animated animate__heartBeat")
            alert('Successfully Logged in!')
        });
        $("#btncprofile").click(() => {
            $("#btncprofile").addClass("animate__animated animate__heartBeat")
            alert('Profile Succesfully Created, Start Posting Now!')
        });
        $("#btnpost").click(() => {
            $("#btnpost").addClass("animate__animated animate__heartBeat")
            alert('Your Post is Successful!')
        });
        $("#btneprofile").click(() => {
            $("#btneprofile").addClass("animate__animated animate__heartBeat")
            alert('Profile Edit Saved!')
        });
    });
