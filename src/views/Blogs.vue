<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="section content">
        <h3 class="title is-size-3 is-size-4-mobile">Essays and Blogs</h3>
        <div class="columns is-multiline">
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Advanced Data Structures and Algorithms</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <RouterLink :to="{ name: 'blogDetail', params: { slug: 'genetically-solving-the-age-old-knapsack-problem' } }">
                                Genetically solving the age old Knapsack Problem
                            </RouterLink>
                        </li>
                        <li>
                            <a href="pseudorandom-number-generation-lfsr/index.html">
                                Simplest algorithm to generate a pseudorandom number
                            </a>
                        </li>
                        <li>
                            <a href="fork-bomb/index.html">
                                A virus that threatens online code evaluators
                            </a>
                        </li>
                        <li>
                            <a href="fully-persistent-arrays/index.html">
                                Arrays that let us time travel
                            </a>
                        </li>
                        <li>
                            <a href="persistent-data-structures-introduction/index.html">
                                Introduction to a data structure that let&#39;s us time travel
                            </a>
                        </li>
                        <li>
                            <a href="flajolet-martin/index.html">
                                Flajolet Martin algorithm for approximate counting
                            </a>
                        </li>
                        <li>
                            <a href="2q-cache/index.html">
                                A cache algorithm for disk-backed databases
                            </a>
                        </li>
                        <li>
                            <a href="israeli-queues/index.html">
                                Israeli Queues
                            </a>
                        </li>
                        <li>
                            <a href="1d-terrain/index.html">
                                The algorithm that video games use to generate terrains
                            </a>
                        </li>
                        <li>
                            <a href="jaccard-minhash/index.html">
                                Quantifying set similarity using Jaccard similarity coefficient and MinHash
                            </a>
                        </li>
                        <li>
                            <a href="ts-smoothing/index.html">
                                How to smooth time-series data?
                            </a>
                        </li>
                        <li>
                            <a href="lfu/index.html">
                                Constant time implementation of the LFU cache eviction algorithm
                            </a>
                        </li>
                        <li>
                            <a href="morris-counter/index.html">
                                Morris&#39;s algorithm for approximate counting
                            </a>
                        </li>
                        <li>
                            <a href="slowsort/index.html">
                                The slowest sorting algorithm, ever!
                            </a>
                        </li>
                        <li>
                            <a href="phi-accrual/index.html">
                                Phi φ Accrual - a realistic failure detection algorithm
                            </a>
                        </li>
                        <li>
                            <a href="consistent-hashing/index.html">
                                Understanding and implementing consistent hashing
                            </a>
                        </li>
                        <li>
                            <a href="fractional-cascading/index.html">
                                Speeding up binary searches using fractional cascading
                            </a>
                        </li>
                        <li>
                            <a href="bayesian-average/index.html">
                                Do not just rank your results by average rating, use Bayesian Average instead
                            </a>
                        </li>
                        <li>
                            <a href="rule-30-cellular-automata/index.html">
                                Pseudorandom Number Generation using Cellular Automata
                            </a>
                        </li>
                        <li>
                            <a href="isolation-forest/index.html">
                                Isolation Forest Algorithm for Anomaly Detection
                            </a>
                        </li>
                        <li>
                            <a href="image-steganography/index.html">
                                Image Steganography - the art of hiding data in images
                            </a>
                        </li>
                        <li>
                            <a href="sleepsort-golang/index.html">
                                Understanding concurrency in Golang using a the sleepsort algorithm
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Database Engineering</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="how-indexes-work-on-partitioned-and-sharded-data/index.html">
                                How indexes work on partitioned and sharded data
                            </a>
                        </li>
                        <li>
                            <a href="some-data-partitioning-strategies-for-distributed-data-stores/index.html">
                                Some data partitioning strategies for distributed data stores
                            </a>
                        </li>
                        <li>
                            <a href="data-partitioning/index.html">
                                What is Data Partitioning and why it matters at scale
                            </a>
                        </li>
                        <li>
                            <a href="leaderless-replication/index.html">
                                Slow yet essential data replication strategy
                            </a>
                        </li>
                        <li>
                            <a href="conflict-resolution/index.html">
                                How to resolve conflicts in multi-master setup
                            </a>
                        </li>
                        <li>
                            <a href="conflict-detection/index.html">
                                How to detect conflicts in a multi-master setup
                            </a>
                        </li>
                        <li>
                            <a href="multi-master-replication/index.html">
                                What is multi-master replication and why it matters at scale
                            </a>
                        </li>
                        <li>
                            <a href="monotonic-reads/index.html">
                                Reads have to be monotonic, but why
                            </a>
                        </li>
                        <li>
                            <a href="read-your-write-consistency/index.html">
                                Understanding the read-your-write consistency and why it is important
                            </a>
                        </li>
                        <li>
                            <a href="handling-outages-master-replica/index.html">
                                How to handle common database outages
                            </a>
                        </li>
                        <li>
                            <a href="new-replica/index.html">
                                What happens behind the scene when a new replica is added to an existing database
                                cluster
                            </a>
                        </li>
                        <li>
                            <a href="replication-formats/index.html">
                                Understanding replication formats that power the Master-Replica setup
                            </a>
                        </li>
                        <li>
                            <a href="replication-strategies/index.html">
                                Different ways to replicate the data across the database cluster
                            </a>
                        </li>
                        <li>
                            <a href="master-replica-replication/index.html">
                                What is a master-replica setup and why it matters
                            </a>
                        </li>
                        <li>
                            <a href="durability/index.html">
                                Understanding Durability in ACID
                            </a>
                        </li>
                        <li>
                            <a href="isolation/index.html">
                                Understanding Isolation in ACID
                            </a>
                        </li>
                        <li>
                            <a href="consistency/index.html">
                                Understanding Consistency in ACID
                            </a>
                        </li>
                        <li>
                            <a href="atomicity/index.html">
                                Understanding Atomicity in ACID
                            </a>
                        </li>
                        <li>
                            <a href="taxonomy-on-sql/index.html">
                                How to design a taxonomy on a Relational DB
                            </a>
                        </li>
                        <li>
                            <a href="copy-on-write/index.html">
                                Why copy-on-write matters?
                            </a>
                        </li>
                        <li>
                            <a href="midpoint-insertion-caching-strategy/index.html">
                                A caching strategy that works well with sequential scans
                            </a>
                        </li>
                        <li>
                            <a href="fast-and-efficient-pagination-in-mongodb/index.html">
                                How to paginate faster with consistent performance?
                            </a>
                        </li>
                        <li>
                            <a href="mongodb-cursor-skip-is-slow/index.html">
                                Why MongoDB&#39;s cursor.skip() is Slow?
                            </a>
                        </li>
                        <li>
                            <a href="benchmark-and-compare-pagination-approach-in-mongodb/index.html">
                                I benchmarked different pagination strategies in MongoDB
                            </a>
                        </li>
                        <li>
                            <a href="multiple-mysql-on-same-server-using-docker/index.html">
                                How to multiple MySQL server running on same Ubuntu server
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Backend System Design</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="architectures-in-distributed-systems/index.html">
                                Common architectural patterns in distributed systems
                            </a>
                        </li>
                        <li>
                            <a href="mistaken-beliefs-of-distributed-systems/index.html">
                                Dangerous assumptions people make while designing distributed systems
                            </a>
                        </li>
                        <li>
                            <a href="bitcask/index.html">
                                Understanding Bitcask - A Log-Structured fast KV store
                            </a>
                        </li>
                        <li>
                            <a href="rum/index.html">
                                The RUM Conjecture
                            </a>
                        </li>
                        <li>
                            <a href="sliding-window-ratelimiter/index.html">
                                Designing and implementing a sliding window based rate limiter
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">CPython Internals</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="chained-operators-python/index.html">
                                How Python evaluates chained comparison operators
                            </a>
                        </li>
                        <li>
                            <a href="the-weird-walrus/index.html">
                                Python walrus operator is weird, but I fixed it
                            </a>
                        </li>
                        <li>
                            <a href="constant-folding-python/index.html">
                                How python optimises the runtime using constant folding
                            </a>
                        </li>
                        <li>
                            <a href="string-interning-python/index.html">
                                How python optimises its runtime using string interning
                            </a>
                        </li>
                        <li>
                            <a href="python-iterable-integers/index.html">
                                Can we iterate on a Python integer?
                            </a>
                        </li>
                        <li>
                            <a href="python-caches-integers/index.html">
                                Python caches smaller integers to keep its runtime efficient
                            </a>
                        </li>
                        <li>
                            <a href="long-integers-python/index.html">
                                Python supports integers of infinite length, but how?
                            </a>
                        </li>
                        <li>
                            <a href="i-changed-my-python/index.html">
                                I changed my python for fun!
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Programming</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="recursion-visualizer-python/index.html">
                                Building a simple recursion tree visualizer for Python
                            </a>
                        </li>
                        <li>
                            <a href="decipher-repeated-key-xor/index.html">
                                Deciphering Repeated-key XOR Ciphertext
                            </a>
                        </li>
                        <li>
                            <a href="decipher-single-xor/index.html">
                                Deciphering Single-byte XOR Ciphertext
                            </a>
                        </li>
                        <li>
                            <a href="inheritance-c/index.html">
                                C does not support inheritence, but what if I need it?
                            </a>
                        </li>
                        <li>
                            <a href="fsm-python/index.html">
                                Building Finite State Machines with Python Coroutines
                            </a>
                        </li>
                        <li>
                            <a href="python-prompts/index.html">
                                Personalize your Python Prompt
                            </a>
                        </li>
                        <li>
                            <a href="function-overloading/index.html">
                                Python does not support functional overloading, let&#39;s implement it
                            </a>
                        </li>
                        <li>
                            <a href="stop-an-iterating-loop/index.html">
                                What is the best way to stop an iterating loop?
                            </a>
                        </li>
                        <li>
                            <a href="making-http-requests-using-netcat/index.html">
                                Understanding HTTP protocol and firing HTTP requests using netcat
                            </a>
                        </li>
                        <li>
                            <a href="setting-up-graphite-using-nginx-on-ubuntu/index.html">
                                How to set up Graphite using Nginx on an Ubuntu server
                            </a>
                        </li>
                        <li>
                            <a href="setting-up-graphite-grafana-using-nginx-on-ubuntu/index.html">
                                How to set up Graphite and Grafana on an Ubuntu server
                            </a>
                        </li>
                        <li>
                            <a href="publish-python-package-on-pypi/index.html">
                                How to publish a Python package on PyPI
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Information Retrieval</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="idf/index.html">
                                The math behind Inverse Document Frequency - the IDF of TFIDF
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="column is-6">
                <div class="content">
                    <h3 class="title is-size-4">Career Growth</h3>
                    <ul class="is-size-5 is-size-6-mobile">
                        <li>
                            <a href="better-programmer/index.html">
                                Eight Rituals to be a Better Programmer
                            </a>
                        </li>
                    </ul>
                    <br>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <section class="section">
            <hr>
            <div class="columns is-multiline is-mobile">
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Writings and Videos</div>
                    <p>
                        <a href="../videos/index.html"> Videos</a>
                    </p>
                    <p>
                        <a href="index.html"> Essays and Blogs</a>
                    </p>
                </div>
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Courses</div>
                    <p>
                        <a href="../system-design-for-beginners/index.html">System Design for Beginners</a>
                    </p>
                    <p>
                        <a href="../masterclass/index.html">System Design Masterclass</a>
                    </p>
                    <p>
                        <a href="../redis-internals/index.html">Redis Internals</a>
                    </p>
                </div>
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Legal and Contact</div>
                    <p>
                        <a href="../about-arpit-bhayani/index.html"> About me</a>
                    </p>
                    <p>
                        <a href="../terms-conditions/index.html"> Terms and Conditions</a>
                    </p>
                    <p>
                        <a href="../privacy-policy/index.html"> Privacy Policy</a>
                    </p>
                    <p>
                        <a href="../refund-policy/index.html"> Refund Policy</a>
                    </p>
                    <p>
                        <a href="../contact/index.html"> Contact Me</a>
                    </p>
                </div>
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Everything Else</div>
                    <p>
                        <a href="https://github.com/DiceDB/Dice" target="_blank">
                            DiceDB
                        </a>
                    </p>
                    <p>
                        <a href="https://revine.arpitbhayani.me/" target="_blank">
                            Revine
                        </a>
                    </p>
                    <p>
                        <a href="../bookshelf/index.html"> Bookshelf</a>
                    </p>
                    <p>
                        <a href="../papershelf/index.html"> Papershelf</a>
                    </p>
                    <p>
                        <a href="https://twitter.com/TheSmarterChimp" target="_blank">
                            The Smarter Chimp
                        </a>
                    </p>
                </div>
                <div class="column is-6-desktop is-8-tablet is-12-mobile is-size-5">
                    <div class="content">
                        <br>
                        <p class="has-text-weight-bold is-size-5 is-size-5-mobile">
                            <span class="has-text-primary">Arpit's Newsletter</span>
                            <span class="has-text-weight-bold is-size-5 is-size-6-mobile">read by 56000+
                                engineers</span>
                        </p>
                        <p class="has-text-weight-normal is-size-5 is-size-6-mobile">
                            Weekly essays on real-world system design, distributed
                            systems, or a deep dive into some super-clever
                            algorithm.
                        </p>
                    </div>
                    <p>
                    <div>
                        <div class="buttons">
                            <a class="button is-medium is-primary"
                                href="https://www.linkedin.com/newsletters/asli-engineering-6921728898456072192/"
                                target="_blank">Subscribe on LinkedIn</a>
                            <a class="button is-medium is-light is-primary" href="https://arpit.substack.com/"
                                target="_blank">Subscribe on Substack</a>
                        </div>
                    </div>
                    </p>
                </div>
            </div>
            <br>
            <div class="columns has-text-centered">
                <div class="column is-centered">
                    <ul class="horizontal">
                        <li>
                            <a class="button" target="_blank" href="https://youtube.com/c/ArpitBhayani"
                                title="Asli Engineering by Arpit Bhayani">
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a class="button" target="_blank" href="https://twitter.com/arpit_bhayani"
                                title="Follow Arpit Bhayani on Twitter">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a class="button" target="_blank" href="https://linkedin.com/in/arpitbhayani"
                                title="Follow Arpit Bhayani on LinkedIn">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a class="button" target="_blank" href="https://github.com/arpitbbhayani"
                                title="Follow Arpit Bhayani on GitHub">
                                GitHub
                            </a>
                        </li>
                    </ul>
                    <br>
                    <ul class="horizontal">
                        <li style="margin-left: 0.5em">© Arpit Bhayani, 2023</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>