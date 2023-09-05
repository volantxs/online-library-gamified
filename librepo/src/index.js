export default function Home() {
    return {
        <>
            <head lang="en">
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Librepo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
                <link rel="stylesheet" href="css/index.css" type="text/css"/>

            </head>
            <body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
            <div id="root">
            <nav class="navbar fixed-top navbar-expand-sm" >
                <div class="container-fluid">
                <button class="navbar-toggler bg-black rounded-pill text-light " type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                Index
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Prequel</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#vault">Vault</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Features
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#rxp">RXP</a></li>
                            <li><a class="dropdown-item" href="#levels">Levels</a></li>
                            <li><a class="dropdown-item" href="#stats">Stats</a></li>
                        </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://twitter.com/volantxs">Request a feature</a></li>
                    </ul>
                    <form class="d-flex " role="search">
                        <input class="form-control me-2 rounded-pill " type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-dark rounded-pill" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </div>
            </nav>
            <main class="">
                <div class="container-fluid row p-5 " >
                    <div class="col-sm-8 text-center container" >
                    <div class="p-4 mt-5"></div>
                    <h1>Welcome to Librepo</h1>
                    <p class="lead">Be in your own adventure</p>
                    <form action="" method="POST" id="joinWaitlist" method="POST" class="d-flex justify-content-center input-group mb-5 mt-5">
                        <div class="col-lg-3"></div>
                        <input type="text" class="form-control rounded-pill me-3 col-lg-6" placeholder="adopt@librepo.com"  name="email" id="email" value="" required/>
                        <button class="btn btn-outline-dark rounded-pill col-lg-2 wobble"  type="submit" sendMessage()>Join wailist</button>
                        <div class="col-lg-3"></div>
                    </form>
                    <div class="d-flex justify-content-center mt-5 p-5" style="border: 2px dashed black;">
                        <a class="btn btn-violet rounded-pill btn-lg" href="createStory.html" target="_self">Start adventure</a>
                    </div>
                    </div>
                    <div class="col-sm-4 zoom-wrapper">
                    <img src="img/door.png" class="img-fluid" width="400px" height="600px" alt="opened door depicting your chosen adventrue story">
                    </div>
                </div>
                <div class="jumbotron text-center">
                    <hr class="divider">
                    <h2 class="lead p-4 ">Keep your vault everywhere you go</h2>
                    <hr class="divider">
                    <img src="img/bg.png" class="img-fluid img" width="800" height="500" alt="Bookmark design depicting cover design with " loading="lazy"/>
                </div>
                </div>
                <div class="container p-5" id="about">
                    <p class="h1">About</p>
                    <hr class="divider mb-3">
                    <p class="fs-5">Librepo is built with the idea of having repositories for books. Both frontend and backend are being formulated, revised and updated daily by the one and only, me. 
                    Founded and in-process under<a href="https://buildspace.so/"> Buildspace's</a> night & weekends (n&w) Season 4. Figma flow is being developed right now to get a 
                    rough overview of how the UI/UX can be assessed to provide ease of access. Raw framework of Librepo fundamentals is ready which will be thoroughly refined and built as we move into 
                    6th week of n&w s4.
                    </p>
                    <p class="lead fs-2">Developer (me)</p>
                    <p class="fs-5">I have a MS degree in Computational Chemistry, professional background in business developement and non-negotiable interest 
                    in technology, universe, astrophysics, anime and books.
                    </p>
                </div>
                <div class="container p-5" id="vault">
                    <p class="h1">Reader's Vault</p> 
                    <hr class="divider mb-5">
                <div class="row">
                    <div class="col-md-auto card mb-3 me-3" style="max-width: 400px;">
                    <div class="row p-1">
                        <div class="col-md-4 p-2 ">
                        <img src="img/gentle man in moscow.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Amor Towles</h5>
                            <dl class="card-text">
                            <dd>Pages: 512</dd>
                            <dd>Year: 2016</dd>
                            <dd>Genre: Historical fiction, Political Fiction</dd>

                            </dl>
                            <p class="card-text"><small class="text-body-secondary">RXP | +450</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                
                    <div class="col-md-auto card mb-3 me-3" style="max-width: 400px;">
                    <div class="row p-1">
                        <div class="col-md-4 p-2 ">
                        <img src="img/shadow fo wind.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Carlos Ruiz Zafon</h5>
                            <dl class="card-text">
                            <dd>Pages: 512</dd>
                            <dd>Year: 2001</dd>
                            <dd>Genre: Thriller, Gothic fiction, Drama</dd>

                            </dl>
                            <p class="card-text"><small class="text-body-secondary">RXP | +450</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-auto card mb-3 me-3" style="max-width: 400px;">
                    <div class="row p-1">
                    <div class="col-md-4 p-2 ">
                        <img src="img/crooked-kingdom.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Leigh Bardugo</h5>
                        <dl class="card-text">
                            <dd>Pages: 560</dd>
                            <dd>Year: 2016</dd>
                            <dd>Genre: YA fiction, Fantasy </dd>
                        </dl>
                        <p class="card-text"><small class="text-body-secondary">RXP | +550</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <section>
                <div class="container p-5">
                <p class="h1">Features</p>
                <hr class="mb-3">
                <dl class="fs-5">
                    <dd class="mb-4"><p class="fs-2 lead" id="rxp">RXP</p>Readers will gain RXP points with each book added to the completed collection.
                    Initially, the RXP will be accumulated as a single type XP which would eventually disintegrate into multiple 
                categories in future depending upon the theme/genre of the book.</dd>
                <dd class="mb-4"><p class="fs-2 lead " id="levels">Levels</p>Readers will set their monthly/yearly goals such that with every 
                    achievement they will be able climb a new level defined by thesystem. Librepo is considered as a pseudo-gamified library web app being 
                    developed to provide best UX and improve your reading habit.</dd>
                <dd><p class="lead fs-2" id="stats">Stats</p>In the later phases of this project, the plan is to implement monthly stats of users 
                to keep a track of their book-reading-streak. This will help readers to analyse their reading pattern.</dd>
                    </dd>
                </dl>
                

                </div>

                </div>
            </section>
            
            <div class="container p-5 mb-5">
            <div class="card">
                <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>Open your eyes and see what you can with them before they close forever</p>
                    <footer class="blockquote-footer">Anthony Doerr |<cite title="Source Title"> All the light we cannot see</cite></footer>
                </blockquote>
                </div>
            </div>
            </div>
            </main>
                <footer class="navbar fixed-bottom justify-content-center p-1" style="background-color: black;">
                <p class="lead text-light mt-2"><a class="text-light" href="#">Get early access</a></p>        
                </footer>
            </div>
            <script type="module">
                import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
            import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
            import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
            const firebaseConfig = {
            apiKey: "AIzaSyCHSG2DeMvetR7PnXdeyzrELkw8fJXwOh0",
            authDomain: "librepo-erevald.firebaseapp.com",
            projectId: "librepo-erevald",
            storageBucket: "librepo-erevald.appspot.com",
            messagingSenderId: "184976154092",
            appId: "1:184976154092:web:2dacf8b6923c113ccb74c9"
            };
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            document.getElementById('joinWaitlist').addEventListener('submit', formSubmit);
            function formSubmit(e) {
                e.preventDefault();
                const email = document.querySelector("#email").value;
                sendMessage(email);
            document.getElementById('joinWaitlist').reset();
            }
            function sendMessage(email) {
                    const docRef = addDoc(collection(db, "waitlist"),  {
                            email: email,
                        });
                alert("Joined Librepo(beta) waitlist")
                    
            //Form Reset After Submission
                    document.getElementById('joinWaitlist').reset();
                    // setTableData(dataObj);
                
                }
                
            </script>
            </body>
        </>
    }
}