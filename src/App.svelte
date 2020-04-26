<script>
    import "../node_modules/mvp.css/mvp.css"
    import Editor from "./Editor.svelte";
    import {personsStorage} from "./persons"
    import {slide} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import Winner from "./Winner.svelte";

    let persons = [];

    personsStorage.useLocalStorage();
    personsStorage.subscribe(value => {
        persons = value;
    });

    let showEditor = persons.length === 0;
    let disabled = persons.length === 0;

    const swith = () => showEditor = !showEditor

    let winner = "";

    function choose() {
        winner = "";
        winner = persons[Math.floor(Math.random() * persons.length)];
    }


</script>

<main>
    <div id="container">
        {#if winner}
            <Winner name="{winner}"/>
        {/if}
        <button disabled={persons.length < 2 } on:click={choose}>Random</button>
        <button on:click={swith}>Persons ({persons.length})</button>
        {#if showEditor}
            <div class="editor-container" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
                <Editor/>
            </div>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    #container {
        text-align: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    .editor-container {
        box-sizing: border-box;
    }
</style>