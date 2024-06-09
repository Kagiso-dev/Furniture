const events = [
    {
        id: 1,
        title: "2023 2024 Vodacom URC - Vodacom Bulls vs Leinster",
        date: "2024-07-15",
        venue: "Loftus Versfeld",
        coverPhoto: "https://s3.eu-west-1.amazonaws.com/887610a4-09ef-45cd-9ef7-2b20186bb88b-production/bee37af0-4e2e-4eaa-aac2-b02b1323e1ac",
        details: "Join us for a night of music under the stars with performances by top artists.",
		payment: "Send proof of payment with <b>RefVodacom</b> to thabo@gmail.com"
    },
    {
        id: 2,
        title: "DJ Zinhle - Zee Nation Fest",
        date: "2024-08-09",
        venue: "Johannesburg Expo Centre Nasrec",
        coverPhoto: "https://ticketprosfe.scdn2.secure.raxcdn.com/images/banner_ba53b06d-5c9f-aa34-0106-6654676a1cd8.jpg",
        details: "Explore the latest in contemporary art from artists around the world.",
		payment: "Send proof of payment with <b>RefZintle</b> to thabo@gmail.com"
    },
    {
        id: 3,
        title: "Dru Hill Live in South Africa - All White Soul Sessions Concert",
        date: "2024-07-07",
        venue: "Sunbet Arena at Time Square",
        coverPhoto: "https://ticketprosfe.scdn2.secure.raxcdn.com/images/banner_2a3bb2d2-d769-03cc-92e3-664341a45b3d.jpg",
        details: "Taste delicious dishes from top chefs and enjoy live cooking demonstrations.",
		payment: "Send proof of payment with <b>RefAllwhite</b> to thabo@gmail.com"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const eventList = document.getElementById('event-list');
    const eventModal = document.getElementById('event-modal');
    const modalInfo = document.getElementById('modal-info');
    const closeButton = document.querySelector('.close-button');

    function displayEvents(eventsToDisplay) {
        eventList.innerHTML = '';
        eventsToDisplay.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <img src="${event.coverPhoto}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.venue}</p>
            `;
            eventCard.addEventListener('click', () => showEventDetails(event));
            eventList.appendChild(eventCard);
        });
    }

    function showEventDetails(event) {
        eventModal.classList.remove('hidden');
        eventModal.style.display = 'block';
        modalInfo.innerHTML = `
            <h2>${event.title}</h2>
            <img src="${event.coverPhoto}" alt="${event.title}">
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Venue:</strong> ${event.venue}</p>
            <p>${event.details}</p>
			<p>${event.payment}</p>
        `;
    }

    function hideEventDetails() {
        eventModal.classList.add('hidden');
        eventModal.style.display = 'none';
    }

    searchBar.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchQuery) ||
            event.venue.toLowerCase().includes(searchQuery)
        );
        displayEvents(filteredEvents);
    });

    closeButton.addEventListener('click', hideEventDetails);
    window.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            hideEventDetails();
        }
    });

    displayEvents(events);
});
