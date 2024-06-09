body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

#searchBar {
    width: 80%;
    padding: 0.5rem;
    margin-top: 1rem;
}

main {
    padding: 1rem;
}

#event-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.event-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    width: calc(33% - 2rem);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.event-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.hidden {
    display: none;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: white;
    margin: 10% auto;
    padding: 1rem;
    border: 1px solid #ccc;
    width: 80%;
    max-width: 600px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 0.5rem 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
