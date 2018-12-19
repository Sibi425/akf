<template>
  <div>
        <div class="table-responsive">
            <h1>Fische</h1>
            <br>
            <table id="fish_table">

            </table>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FishTable"
}

let fish_data = $.getJSON("./fishes.json", function (data) {
    fish_data = data;
});
$(document).ready(function () {
$('#fish_table').DataTable({
    "data": fish_data,
    "aLengthMenu": [100],
    "columns": [
        { "data": "name", title: 'Name' },
        { "data": "location", title: 'Ort' },
        { "data": "time", title: 'Uhrzeit' },
        { "data": "day", title: 'Tag' },
        { "data": "bait", title: 'Köder' }
    ]
});
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
