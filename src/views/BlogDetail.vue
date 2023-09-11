<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10-desktop is-12-tablet is-12-mobile is-size-5 is-size-6-mobile">
                <div class="columns is-vcentered content">
                    <div class="column is-5">
                        <div class="image">
                            <a href="index.html">
                                <img src="https://giphy.com/gifs/3o6Mb9cGKe3JzhbqPC" style="border-radius: 2em;"
                                    alt="How indexes work on partitioned and sharded data">
                            </a>
                        </div>
                    </div>
                    <div class="column is-7">
                        <h1 class="title has-text-primary is-size-2 is-size-3-mobile">
                            How indexes work on partitioned and sharded data
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="section columns is-centered">
            <div class="column is-8-desktop is-12-tablet is-12-mobile is-size-5 is-size-6-mobile">
                <div class="content blog-content">

                    <p>The previous essay looked at two popular ways to <a
                            href="../data-partitioning-strategies.html">horizontally partition</a> the data -
                        Range-based Partitioning and Hash-based Partitioning. In this essay, we will take a detailed
                        look into how we could <a href="https://en.wikipedia.org/wiki/Database_index">index</a> the
                        partitioned data, allowing us to query the data on secondary attributes quickly.</p>
                    <h1 id="partitioning-and-querying">Partitioning and Querying</h1>
                    <p>In a <a href="../data-partitioning/index.html">partitioned database</a>, the data is split
                        horizontally on the partitioned key. Given that each partition is required to handle a
                        fragment of data, the query that is bound to a single partition is answered very quickly vs
                        the query that requires cross partition execution. But what happens when we want to query
                        the data on any attribute other than the partitioned key; that is where things become very
                        interesting.</p>
                    <p>Say we have a <code>movies</code> collection partitioned on <code>id</code> (the movie ID),
                        and each record has the following structure.</p>
                    <pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;"
                        tabindex="0"><code><span class="line"><span style="color: #E1E4E8">{</span></span>
<span class="line"><span style="color: #E1E4E8">	</span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0111161</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">	</span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"The Shawshank Redemption"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">	</span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">],</span></span>
<span class="line"><span style="color: #E1E4E8">	</span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1994</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span></code></pre>
                    <p>Given that the collection is partitioned on <code>id</code>, querying a movie by its
                        <code>id</code> will be lightning-quick as it would need to hit just one partition to grab
                        the record as determined by the Hash function.
                    </p>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152688735-16e15acf-fcee-491c-9b74-965e3590df9c.png"
                            alt="Pointed Query in Partitioned Database"></p>
                    <p>What if we need to get the list of all the movies belonging to a particular genre? Answering
                        this query is very expensive as we would have to go through every record across all the
                        partitions and see which ones match our criteria, accumulate them, and return them as the
                        response. Given that this process is tedious we leverage indexing to compute the answer
                        quickly.</p>
                    <h1 id="indexing">Indexing</h1>
                    <p>Indexing is a popular technique to make reads super-efficient, and it does so by creating a
                        query-able mapping between indexed attributes and the identity of the document. An index
                        that maps non-primary key attributes to the record id is called a Secondary Index.</p>
                    <p>Say, we have the following 6 movie documents, partitioned on <code>id</code> (the movie ID)
                        and split across 2 partitions as shown below</p>
                    <pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;"
                        tabindex="0"><code><span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0111161</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"The Shawshank Redemption"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1994</span><span style="color: #E1E4E8"> }</span></span>
<span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0068646</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"The Godfather"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Crime"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1972</span><span style="color: #E1E4E8"> }</span></span>
<span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0071562</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"The Godfather: Part II"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Crime"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1974</span><span style="color: #E1E4E8"> }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0468569</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"The Dark Knight"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Action"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Crime"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">2008</span><span style="color: #E1E4E8"> }</span></span>
<span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0050083</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"12 Angry Men"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Crime"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1957</span><span style="color: #E1E4E8"> }</span></span>
<span class="line"><span style="color: #E1E4E8">{ </span><span style="color: #79B8FF">"id"</span><span style="color: #E1E4E8">: </span><span style="color: #FDAEB7; font-style: italic">tt</span><span style="color: #79B8FF">0108052</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"name"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"Schindler's List"</span><span style="color: #E1E4E8">, </span><span style="color: #79B8FF">"genre"</span><span style="color: #E1E4E8">: [</span><span style="color: #9ECBFF">"Biography"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"Drama"</span><span style="color: #E1E4E8">, </span><span style="color: #9ECBFF">"History"</span><span style="color: #E1E4E8">], </span><span style="color: #79B8FF">"year"</span><span style="color: #E1E4E8">: </span><span style="color: #79B8FF">1993</span><span style="color: #E1E4E8"> }</span></span></code></pre>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152688989-d70c541f-92c9-4f3f-ad54-740f660f7bd0.png"
                            alt="movies Partitioned across 2 partitions"></p>
                    <p>To query movies by <code>genre = Crime</code>, we will have to index the data on
                        <code>genre</code> allowing us to find the relevant documents quickly. Indexes are a little
                        tricky in a partitioned database, and there are two ways to implement them: Local Indexing
                        and Global Indexing. <a href="https://aws.amazon.com/dynamodb/">AWS’s DynamoDB</a> is a
                        partitioned KV store that supports secondary indexes on non-partitioned attributes, and it
                        supports both of these indexing techniques.
                    </p>
                    <h2 id="local-secondary-index">Local Secondary Index</h2>
                    <p>Local Secondary Indexing creates indexes on a non-partitioned attribute on the data belonging
                        to the partition. Thus, each partition has a secondary index that is built on that data
                        owned by that partition and it knows nothing about the data present in other partitions.
                        Hence, on the example that we have at hand, the Local Secondary Index on attribute
                        <code>genre</code> would look like this
                    </p>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152689634-c3235f38-5cf2-4446-af87-ecd58807296d.png"
                            alt="Local Secondary Index - Movies"></p>
                    <p>The key advantage of having a Local Secondary Index is that whenever a write happens on a
                        partition, the index update happens locally without needing any cross partition
                        communication (mostly a network IO). When the data is fetched from a Local Secondary Index,
                        it is fetched from the partition that holds the index data and the entire record; so
                        execution takes a minimal time.</p>
                    <p>Local Secondary Indexes come in handy when we want to query the data in conjunction with the
                        partitioned key. For example, if the movies were partitioned by <code>genre</code> (instead
                        of <code>id</code>) and we create an index on <code>year</code> it will help us efficiently
                        answer the queries like movies of a particular <code>genre</code> released in a specific
                        <code>year</code>.
                    </p>
                    <h3 id="when-local-secondary-indexes-suffer">When Local Secondary Indexes suffer?</h3>
                    <p>Although Local Secondary Indexes are great, they cannot efficiently answer the queries that
                        require cross partition fetch. For example, if we fire the query to get all
                        <code>Crime</code> movies through a Local Secondary Index, we will be getting the records
                        that are local to the partition on which the query executes.
                    </p>
                    <p>But, answering the query to fetch all the movies from the <code>Crime</code> genre requires
                        us to go through all the partitions and individually execute the query, then gather
                        (accumulate) the results and return. This is an extremely expensive process that is also
                        prone to network delays, partitioning, and unreliability.</p>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152691045-f9958236-b532-4fed-a5d3-902962edd1b0.png"
                            alt="Scatter Gather Local Secondary Index"></p>
                    <p>We face this limitation because the movies with the <code>crime</code> genre are distributed
                        across partitions because there is no way to ensure all movies with the <code>Crime</code>
                        genre belong to the same partition when the data partitioning is done on <code>id</code>.
                    </p>
                    <p>Hence, it is very important to structure data partitioning and indexing depending on the
                        queries we want to support ensuring that the queries can be answered through just one
                        partition. To address this problem of being able to query the data on an indexed attribute,
                        we create Global Secondary Indexes.</p>
                    <h2 id="global-secondary-index">Global Secondary Index</h2>
                    <p>Global Secondary Indexes choose not to be local to a partition’s data instead, this indexing
                        technique covers the entire dataset. Global Secondary Index is a kind of re-partitioning of
                        data on a different partition key allowing us to have faster reads and a global view on the
                        indexed attribute.</p>
                    <p>On the example that we have at hand, Global Secondary Index on <code>genre</code> would look
                        like this.</p>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152696486-33d94f29-6918-48f6-8644-b6ee809a2a81.png"
                            alt="Global Secondary Index - Movies example"></p>
                    <p>The key advantage of having a Global Secondary Index is that it allows us to query the data
                        on the indexed attribute globally and not limit ourselves to a fragment of the data. Since
                        it literally re-partitions the data on a different attribute, firing query on the indexed
                        attribute requires it to hit just one partition for execution and thus saving fanning out to
                        multiple partitions.</p>
                    <h3 id="when-global-secondary-indexes-suffer">When Global Secondary Indexes suffer?</h3>
                    <p>The database takes a performance hit when a Global Secondary Index needs to be synchronously
                        updated as soon as the update happened on the main record, and if the updation happens
                        asynchronously then the readers need to be aware of a possible stale data fetch.</p>
                    <p>Synchronous updation of a Global Secondary Index is an extremely expensive operation given
                        that every write on primary data will be translated to a number of synchronous updation
                        across partitions for index updation wrapped in a long <a
                            href="https://en.wikipedia.org/wiki/Distributed_transaction">Distributed Transaction</a>
                        to ensure <a href="https://en.wikipedia.org/wiki/Data_consistency">Data Consistency</a>.</p>
                    <p><img src="../../../user-images.githubusercontent.com/4745789/152697444-4b90d88b-fa18-4456-b8ba-bdde15ddbac4.png"
                            alt="Global Secondary Index updation"></p>
                    <p>Hence, in practice, most Global Secondary Indexes are updated asynchronously involving a rick
                        of Replication Lag and stale data reads. The readers from these indexes should be okay with
                        reading stale data and the system being eventually consistent. The delay in propagation
                        could vary from a second to a few minutes, depending on the underlying hardware’s CPU
                        consumption and network capacity.</p>

                </div>
            </div>
        </div>
        <div class="section">
            <h3 class="title is-size-3 is-size-4-mobile">Courses</h3>
            <p class="is-size-4 is-size-5-mobile">
                Super practical courses, with a no-nonsense approach, are designed to
                spark engineering curiosity and help you ace your career.
            </p>
            <br>
            <div>
                <div>
                    <div class="columns is-multiline is-mobile">
                        <div class="column is-4-desktop is-6-tablet is-12-mobile" style="border-radius: 2em;">
                            <div class="box">
                                <h2 class="is-size-4 is-size-5-mobile" style="line-height: 1.3em;">
                                    <a href="../../system-design-for-beginners/index.html">
                                        System Design for Beginners
                                    </a>
                                </h2>
                                <p style="margin-top: 0.75em;" class="is-size-5 is-size-6-mobile">
                                    An in-depth, self-paced, and on-demand course that for early engineers to become
                                    great at designing scalable, available, and extensible systems at scale.
                                </p>
                                <p class="has-text-right">
                                    <a style="margin-top: 0.75em;" class="button"
                                        href="../../system-design-for-beginners/index.html">Details →</a>
                                </p>
                            </div>
                        </div>
                        <div class="column is-4-desktop is-6-tablet is-12-mobile" style="border-radius: 2em;">
                            <div class="box">
                                <h2 class="is-size-4 is-size-5-mobile" style="line-height: 1.3em;">
                                    <a href="../../masterclass/index.html">
                                        System Design Masterclass
                                    </a>
                                </h2>
                                <p style="margin-top: 0.75em;" class="is-size-5 is-size-6-mobile">
                                    A masterclass that helps experienced engineers become great at designing
                                    scalable, fault-tolerant, and highly available systems.
                                </p>
                                <p class="has-text-right">
                                    <a style="margin-top: 0.75em;" class="button"
                                        href="../../masterclass/index.html">Details →</a>
                                </p>
                            </div>
                        </div>
                        <div class="column is-4-desktop is-6-tablet is-12-mobile" style="border-radius: 2em;">
                            <div class="box">
                                <h2 class="is-size-4 is-size-5-mobile" style="line-height: 1.3em;">
                                    <a href="../../redis-internals/index.html">
                                        Redis Internals
                                    </a>
                                </h2>
                                <p style="margin-top: 0.75em;" class="is-size-5 is-size-6-mobile">
                                    A course that helps covers Redis internals by reimplementing its core features
                                    like - event loop, serialization protocol, pipelining, eviction, and
                                    transactions.
                                </p>
                                <p class="has-text-right">
                                    <a style="margin-top: 0.75em;" class="button"
                                        href="../../redis-internals/index.html">Details →</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <section class="has-text-centered notification is-light">
            <div class="columns is-centered">
                <div class="column is-two-thirds">
                    <div class="container image is-256x256" style="padding: 1.3em;">
                        <img src="../../../edge.arpitbhayani.me/img/arpit.jpg" style="border-radius: 1em;"
                            alt="Arpit Bhayani">
                    </div>
                    <h1 class="title has-text-primary is-size-2 is-size-3-mobile">
                        Arpit's Newsletter
                    </h1>
                    <h2 class="title is-size-4 is-size-5-mobile">
                        CS newsletter for the curious engineers
                    </h2>
                    <h3 class="title is-size-5 is-size-6-mobile">
                        ❤️ by 56000+ readers
                    </h3>
                    <p class="is-size-5 is-size-6-mobile">
                        If you like what you read subscribe you can always subscribe to
                        my newsletter and get the post delivered straight to your inbox.
                        I write
                        <a href="../index.html">essays</a> on various engineering topics and share
                        it through my weekly newsletter.
                    </p>
                    <br>
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
                    <br>
                </div>
            </div>
        </section>
        <br>
    </section>

    <div class="container">
        <section class="section">
            <hr>
            <div class="columns is-multiline is-mobile">
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Writings and Videos</div>
                    <p>
                        <a href="../../videos/index.html"> Videos</a>
                    </p>
                    <p>
                        <a href="../index.html"> Essays and Blogs</a>
                    </p>
                </div>
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Courses</div>
                    <p>
                        <a href="../../system-design-for-beginners/index.html">System Design for Beginners</a>
                    </p>
                    <p>
                        <a href="../../masterclass/index.html">System Design Masterclass</a>
                    </p>
                    <p>
                        <a href="../../redis-internals/index.html">Redis Internals</a>
                    </p>
                </div>
                <div class="column is-3-desktop is-6-tablet is-half-mobile is-size-5 is-size-6-mobile">
                    <div style="margin-bottom: 0.75em;">Legal and Contact</div>
                    <p>
                        <a href="../../about-arpit-bhayani/index.html"> About me</a>
                    </p>
                    <p>
                        <a href="../../terms-conditions/index.html"> Terms and Conditions</a>
                    </p>
                    <p>
                        <a href="../../privacy-policy/index.html"> Privacy Policy</a>
                    </p>
                    <p>
                        <a href="../../refund-policy/index.html"> Refund Policy</a>
                    </p>
                    <p>
                        <a href="../../contact/index.html"> Contact Me</a>
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
                        <a href="../../bookshelf/index.html"> Bookshelf</a>
                    </p>
                    <p>
                        <a href="../../papershelf/index.html"> Papershelf</a>
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