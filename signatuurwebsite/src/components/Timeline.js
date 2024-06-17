import React from 'react';
import TimelineItem from '../components/TinelineItem.js';

const Timeline = () => {
    const items = [
        {
            date: 'Sprint 1',
            title: 'Doelgroep Validatie',
            doel: 'Het doel van deze test was om te controleren of de doelgroep die ik en het team voor ogen hadden wel bij het product past.',
            description: 'Het doel van deze test was om te controleren of de doelgroep die ik en het team voor ogen hadden wel bij het product past. ' + 'Om dit te valideren heb ik een semi-gestructureerd interview opgezet met vragen rondom dagelijkse beweging en voeding. ' + 'De opzet voor dit interview heb ik vooral uit de les Customer insights door interviews & surveys gehaald. ',
            images: [
                '../img/Testplan1.jpg',
            ],
            onderschrift: 'Testplan voor de doelgroep validatie.',
            outcomes: [
                'Ja deze doelgroep past inderdaad bij het idee.',
                'De doelgroep vindt sociale functies motiverend (functies zoals het toevoegen van vrienden).',
                'Verschillende beloningen voor voedingen uitdagingen en beweging uitdagingen. Aangezien sommige mensen meer op hun voeding letten en andere meer op hun beweging.'
            ]
        },
        {
            date: 'Sprint 2',
            title: 'Prototype Test',
            doel: 'In dit interview was het doel vooral om erachter komen hoe de gebruiker met het prototype omgaat en wat ze van het idee vinden. (Het verzamelen van feedback)',
            description: 'In dit interview was het doel vooral om erachter komen hoe de gebruiker met het prototype omgaat en wat ze van het idee vinden. (Het verzamelen van feedback)\n' +
                'In deze test gaf ik de gebruiker een rondleiding door het prototype en mocht de testpersoon over alles vragen stellen en feedback geven. \n',
            images: [
                '../img/Testplan2.jpg',
                '../img/Prototype1.jpg',
            ],
            onderschrift: 'Testplan voor de prototype test.',
            outcomes: [
                'Manier waarop uitdagingen zijn opgeschreven zijn “dwingend”. ',
                'Sommige worden zijn in het Engels en sommige in het Nederlands.',
                'Testpersonen vonden de voormgeving een beetje "saai". Vooral omdat er maar twee kleuren worden gebruikt.',
            ]
        },
        {
            date: 'Sprint 3',
            title: '5 Second Test',
            doel: 'Het doel van deze test was om de duidelijkheid van de landing page te testen.',
            description: 'Het doel van deze test was om de duidelijkheid van de landing page te testen. De landing page is het eerste wat potentiële gebruikers zien van je product en als niet gelijk duidelijk is wat je product is kan je potentiële gebruikers mislopen. Dit geldt al helemaal voor digitale producten zoals die van ons team. Daarom heb ik voor deze test gekozen.',
            images: [
                '../img/Testplan3.jpg',
                '../img/LandingPage.png',
            ],
            onderschrift: 'Testplan voor de 5 second test.',
            outcomes: [
                'De Testpersonen dachten dat de app voor kinderen is. De getekende appel op de pagina vonden ze er kinderlijk uitzien.',
                'De testpersonen dachten dat de app vooral bedoeld was voor informatie. Door de naam “WeetjeGezond” en de beschrijving onderaan de pagina.',
            ]
        },
    ];

    return (
        <div>
            <section id="Waarom" className="flex flex-col md:flex-col justify-center items-center bg-gray-100 h-screen md:min-h-auto">
                <div className="mx-auto px-4 flex flex-wrap justify-center items-center md:space-x-8 md:flex-row md:items-center"
                    style={{width: '100%', maxWidth: '100%'}}>
                    <div className="w-full md:w-10/12 mb-4 md:mb-0 py-5">
                        <h2 className="text-xl font-bold mb-4">Waarom heb ik voor deze richting gekozen; Waar stond ik een half jaar geleden en wat wilde ik bereiken?</h2>
                        <p className="text-m mb-4">
                            Een half jaar geleden had ik mijn assessment gehaald als ontwerpende technoloog.
                            Iets waar ik achter was gekomen tijdens dat half jaar was dat ik erg geïnteresseerd ben in
                            gebruikers ervaringen en UX-design. Een van mijn aanbevelingen was toen ook om meer rekening
                            te houden met hoe andere het
                            product ervaren. Dat is ook de reden waarom ik voor de richting als onderzoekende technoloog
                            heb gekozen, Om
                            mijn kennis over testen en onderzoeken naar gebruikerservaring uit te breiden.
                        </p>

                    </div>
                </div>

                <div
                    className="mx-auto px-4 flex flex-wrap justify-center items-center md:space-x-8 md:flex-row md:items-center"
                    style={{width: '100%', maxWidth: '100%'}}>
                    <div className="w-full md:w-10/12 mb-4 md:mb-0 py-5">
                        <h2 className="text-xl font-bold mb-4">Welk nachtkastboek heb ik gelezen? Aan welke informatie
                            uit het boek heb ik veel gehad? Wat zou ik achteraf gezien naar aanleiding van het boek
                            anders doen? Heb ik naast het nachtkastboek nog andere aanvullende inspiratie opgedaan
                            m.b.t. je eigen signatuur?</h2>
                        <p className="text-m mb-4">
                            Ik heb voor het boek Ux for lean startups gekozen.
                            Ux for lean startups is een boek over alle principes van user experience. Voor startups die
                            werken volgens het lean startup framework aka Cyclus ontwikkelen testen verbeteren.
                            Het boek is meer een soort van gids voor het integreren van UX binnen je startup. En hoe je
                            het best mogelijke manier kan inspelen op de behoefte van je doelgroep. Het boek is
                            ingedeeld in drie delen: Validatie, design en product.
                            Ik heb voor dit boek gekozen aangezien de opdracht voor TLE het oprichten van een startup
                            was. Ook vond ik het boek erg passen bij wat ik wil leren het komend half jaar.<br/>
                        </p>
                        <p className="text-m mb-4">
                            In hoofdstuk twee van het boek benoemd de auteur verschillende manieren om te testen met de
                            gebruiker. Een van deze manieren heb ik ook toegepast tijdens het project namelijk: het
                            testen van de landing page doormiddel van een 5 second test (meer informatie hierover in de
                            tijdlijn).
                        </p>
                    </div>
                </div>
            </section>


            <div className="relative max-w-4xl mx-auto py-8">
                <div className="absolute w-1 bg-green-500 left-1/2 transform -translate-x-1/2 h-full"></div>
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        date={item.date}
                        title={item.title}
                        doel={item.doel}
                        description={item.description}
                        isEven={index % 2 === 0}
                        images={item.images}
                        onderschrift={item.onderschrift}
                        outcomes={item.outcomes}
                    />
                ))}
            </div>


            <section id="Waarom"
                     className="flex flex-col md:flex-row justify-center items-center bg-gray-100 py-20 md:min-h-auto">
                <div
                    className="mx-auto px-4 flex flex-wrap justify-center items-center md:space-x-8 md:flex-row md:items-center"
                    style={{width: '100%', maxWidth: '100%'}}>
                    <div className="w-full md:w-10/12 mb-4 md:mb-0 py-5">
                        <h2 className="text-xl font-bold mb-4">Hoe kijk je terug op het afgelopen halfjaar? Wat weet ik
                            inmiddels over het vakgebied? Hoe ben ik in dit vakgebied gegroeid? Wat onderscheidt mij van
                            andere Onderzoekende Technologen? Welke aanbevelingen geef ik mij toekomstige zelf mee? Wat
                            is mijn visie op het vervolg van mijn studie i.r.t. deze richting?</h2>
                        <p className="text-m mb-4">
                            Als ik terugkijk op het afgelopen half jaar dan kan ik zeggen dat ik een hoop heb geleerd over het vakgebied als onderzoekende technoloog.
                            Dat is ook terug te zien in het materiaal wat ik op deze website laat zien.
                            Vooral de laatste twee lessen (Customer insights en User Testing) heb ik het meeste uit kunnen halen voor het project aanvullend met de inhoud van mijn nachtkast boek.
                        </p>
                        <p>
                            Wat voor mij een van de belangrijkste kenmerken is als onderzoekende technoloog is het leiden van de onderzoek fase,
                            het opstellen van een duidelijk testplan dat de rest van het team ook begrijpt en natuurlijk conclusies trekken uit het onderzoek waar de andere technologen hun taken op kunnen voortbouwen.
                        </p>
                        <br/>
                        <p>
                            Ik probeer hier als onderzoekende technoloog ook extra bewust van te zijn.
                            Wat mij daarom kenmerkt als onderzoekende technoloog is: ik werk zo teamgericht mogelijk.
                            Ik erken het belang van het onderzoek voor de andere richtingen en zorg ervoor dat iedereen wat heeft aan de onderzoeken die ik opzet.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
        ;
}

export default Timeline;
