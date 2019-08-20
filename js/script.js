function leapYear()
{
    var year=parseFloat(document.getElementById("year").value);

    if (year % 4 == 0 && year % 100 != 0)
    {
        alert("It's a leap year");
    }else if (year % 400 == 0)
    {
        alert("Not a  leap year");
    }
}