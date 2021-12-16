
var travel_info = new Object();

function handleSubmit () {
    travel_info.p_name = document.getElementById('p_name').value;
    travel_info.d_date = document.getElementById('d_date').value;
    travel_info.n_days = document.getElementById('n_days').value;
    travel_info.d_city = document.getElementById('d_city').value;

    sessionStorage.setItem("travel_info", JSON.stringify(travel_info));

    return;
}