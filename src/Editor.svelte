<script>
    import {personsStorage} from "./persons"

    let persons = [];

    personsStorage.useLocalStorage();
    personsStorage.subscribe(value => {
        persons = value;
    });

    let person = "";

    function addPerson(name) {
        if (name.length > 0 && persons.indexOf(name) === -1) {
            personsStorage.update(persons => [name, ...persons])
            person = "";
        }
    }

    function removePerson(name) {
        personsStorage.update(persons => persons.filter(elem => elem !== name));
    }
</script>

<form on:submit|preventDefault>
    <div class="row">
        <input autofocus type="text" bind:value={person}>
        <button type="submit" on:click={addPerson(person)}>Add</button>
    </div>
    {#each persons as person}
        <div class="row">
            <span>{person}</span>
            <button on:click={removePerson(person)}>Del</button>
        </div>
    {/each}


</form>

<style>
    button {
        padding: 0.4rem 0.8rem;
        margin: 0;
        margin-left: 0.4rem;
    }

    input {
        margin: 0;
    }

    .row {
        padding: 0.4rem;
        display: flex;
        justify-content: space-between;
        vertical-align: middle
    }
</style>