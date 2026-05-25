/* ================================================================
   LIGHT OF THE WORD — Christian Spiritual Assistant
   script.js  |  Created & Developed by ROBERA ALEMU
   ================================================================ */

/* ================================================================
   CHRISTIAN KNOWLEDGE BASE
   Each entry contains:
     keywords[] — phrases/words that trigger this answer
     topic      — displayed as a badge on the bot bubble
     answer     — the main response text (use \n for paragraphs)
     verse       — optional { text, ref } for a Bible verse card
================================================================ */
const KB = [

    /* ══════════════════════════════════════════════
       SECTION 1 — JESUS CHRIST
    ══════════════════════════════════════════════ */
    {
        keywords: ['who is jesus', 'jesus christ', 'who is christ', 'tell me about jesus', 'about jesus'],
        topic: 'Jesus Christ',
        answer: `Jesus Christ is the Son of God — the second Person of the Holy Trinity, fully God and fully human. Born of the Virgin Mary through the Holy Spirit in Bethlehem, He lived a sinless life, performed countless miracles, taught the Kingdom of God, was crucified on the cross for the sins of all humanity, and rose from the dead on the third day — conquering sin and death forever.\n\nJesus is described as the Way, the Truth, and the Life (John 14:6). He is Savior, Lord, Redeemer, King of Kings, and the Prince of Peace. Through faith in Him, every person can receive forgiveness, eternal life, and a restored relationship with God the Father.\n\nHis Hebrew name — Yeshua — literally means "God saves." Christians believe He will return again in glory to judge the living and the dead and establish His eternal kingdom.`,
        verse: { text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."', ref: 'John 3:16' }
    },
    {
        keywords: ['jesus die', 'cross', 'crucifixion', 'why did jesus', 'died for our sins', 'atonement', 'calvary'],
        topic: 'The Cross',
        answer: `Jesus died on the cross as the ultimate sacrifice for the sins of all humanity. In God's perfect plan of redemption, a price had to be paid for sin — and that price was death (Romans 6:23). Because God loves us completely, He sent His own Son to pay that price on our behalf.\n\nJesus — being completely sinless — took upon Himself every sin of every person who ever lived. His death at Calvary was not an accident but a divine act of substitutionary atonement: He stood in our place so we could go free.\n\nHis resurrection three days later proved His victory over death and confirmed that the payment was accepted by the Father. The cross is not a symbol of defeat — it is the single greatest act of love in all of human history.`,
        verse: { text: '"But he was pierced for our transgressions; he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."', ref: 'Isaiah 53:5' }
    },
    {
        keywords: ['resurrection', 'rose from the dead', 'risen', 'easter', 'empty tomb'],
        topic: 'Resurrection',
        answer: `The resurrection of Jesus Christ is the cornerstone of the Christian faith. On the third day after His crucifixion, Jesus rose from the dead — physically, bodily, and gloriously. The tomb was empty. Angels announced the news. He appeared to Mary Magdalene, to the eleven disciples, and to more than 500 people at once.\n\nThe resurrection proves that Jesus is exactly who He claimed to be — the Son of God. It confirms that His sacrifice on the cross was fully accepted by the Father, that death has been permanently defeated, and that all who believe in Him will also be raised to eternal life.\n\nBecause He lives, we have unshakeable hope. Death is no longer the final word for those who trust in Christ.`,
        verse: { text: '"I am the resurrection and the life. The one who believes in me will live, even though they die."', ref: 'John 11:25' }
    },
    {
        keywords: ['second coming', 'return of jesus', 'jesus coming back', 'rapture', 'end times'],
        topic: 'Second Coming',
        answer: `Christianity teaches that Jesus Christ will return to earth a second time — not as a humble servant, but as King of Kings and Lord of Lords. At His return He will judge all people, defeat all evil, and establish His eternal kingdom of righteousness and peace.\n\nFor believers, the Second Coming is not a cause for fear but a source of tremendous hope and expectation. Jesus Himself promised: "I will come again and receive you to Myself, that where I am, there you may be also" (John 14:3). Christians are called to live in readiness — holy, watchful, and faithfully serving — until that glorious day.`,
        verse: { text: '"For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God."', ref: '1 Thessalonians 4:16' }
    },

    /* ══════════════════════════════════════════════
       SECTION 2 — GOD THE FATHER
    ══════════════════════════════════════════════ */
    {
        keywords: ['who is god', 'god the father', 'nature of god', 'about god', 'tell me about god', 'who is the father'],
        topic: 'God the Father',
        answer: `God is the eternal Creator of all things — omnipotent (all-powerful), omniscient (all-knowing), omnipresent (everywhere present), holy, righteous, loving, and perfectly just. He exists eternally as the Holy Trinity: Father, Son, and Holy Spirit — three Persons, one God.\n\nGod is not a distant force or an impersonal energy; He is a personal Father who knows every hair on your head, who loves you unconditionally, and who desires a deep, living relationship with you. The Bible describes Him as slow to anger, abounding in love, faithful to all generations, and overflowing with compassion.\n\nTo know God is the highest calling and greatest joy of every human soul.`,
        verse: { text: '"God is love, and whoever abides in love abides in God, and God abides in him."', ref: '1 John 4:16' }
    },
    {
        keywords: ['trinity', 'holy trinity', 'father son holy spirit', 'three in one', 'triune god'],
        topic: 'The Holy Trinity',
        answer: `The Holy Trinity is the foundational Christian doctrine that God eternally exists as three distinct Persons — the Father, the Son (Jesus Christ), and the Holy Spirit — yet is one God. This is not three separate gods, nor one Person wearing three masks, but one divine Being expressed in three eternal Persons in perfect unity.\n\nThe Trinity is visible throughout Scripture: at Jesus' baptism, the Father spoke from heaven, the Son was baptized in the Jordan, and the Holy Spirit descended as a dove. The Great Commission commands baptism "in the name of the Father, and of the Son, and of the Holy Spirit."\n\nThough the Trinity surpasses full human comprehension, it reveals that God is inherently relational — an eternal communion of love within Himself.`,
        verse: { text: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."', ref: 'Matthew 28:19' }
    },

    /* ══════════════════════════════════════════════
       SECTION 3 — THE BIBLE
    ══════════════════════════════════════════════ */
    {
        keywords: ['what is the bible', 'about the bible', 'scripture', 'word of god', 'holy book', 'holy bible', 'bible'],
        topic: 'The Bible',
        answer: `The Bible is the inspired, authoritative Word of God — a collection of 66 books written by approximately 40 different human authors over about 1,500 years, yet with one unified divine Author: the Holy Spirit. It is divided into the Old Testament (39 books) and the New Testament (27 books).\n\nThe Bible contains history, poetry, prophecy, wisdom, law, letters, and the eyewitness account of the life of Jesus. Christians believe the Bible is inerrant in its original writings and fully sufficient as the guide for all of life and faith.\n\nReading, studying, and meditating on Scripture daily is the single most powerful way to transform the heart and renew the mind.`,
        verse: { text: '"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."', ref: '2 Timothy 3:16' }
    },
    {
        keywords: ['ten commandments', 'commandments', 'moses commandments', 'the law', 'what are the commandments'],
        topic: 'Ten Commandments',
        answer: `The Ten Commandments were given by God to Moses on Mount Sinai and are recorded in Exodus 20. They are:\n\n1. You shall have no other gods before Me.\n2. You shall not make or worship idols.\n3. You shall not misuse the name of the LORD your God.\n4. Remember the Sabbath day and keep it holy.\n5. Honor your father and your mother.\n6. You shall not murder.\n7. You shall not commit adultery.\n8. You shall not steal.\n9. You shall not bear false witness against your neighbor.\n10. You shall not covet anything that belongs to your neighbor.\n\nJesus summarized the entire law in two great commandments: "Love the Lord your God with all your heart" and "Love your neighbor as yourself" (Matthew 22:37-39).`,
        verse: { text: '"Love the Lord your God with all your heart and with all your soul and with all your mind… Love your neighbor as yourself."', ref: 'Matthew 22:37-39' }
    },
    {
        keywords: ['bible verse', 'favorite verse', 'powerful verse', 'give me a verse', 'scripture verse', 'verse of the day', 'popular verses', 'bible quote'],
        topic: 'Bible Verses',
        answer: `Here are some of the most beloved and powerful Bible verses that Christians treasure:\n\n✝ "For I know the plans I have for you… plans to give you hope and a future." — Jeremiah 29:11\n\n✝ "I can do all things through Christ who strengthens me." — Philippians 4:13\n\n✝ "Trust in the Lord with all your heart and lean not on your own understanding." — Proverbs 3:5\n\n✝ "The Lord is my shepherd; I shall not want." — Psalm 23:1\n\n✝ "Be still, and know that I am God." — Psalm 46:10\n\n✝ "He gives power to the faint, and to him who has no might he increases strength." — Isaiah 40:29\n\n✝ "Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28`,
        verse: { text: '"Your word is a lamp to my feet and a light to my path."', ref: 'Psalm 119:105' }
    },

    /* ══════════════════════════════════════════════
       SECTION 4 — SALVATION & THE GOSPEL
    ══════════════════════════════════════════════ */
    {
        keywords: ['what is salvation', 'saved', 'born again', 'how to be saved', 'salvation', 'accept christ', 'accept jesus'],
        topic: 'Salvation',
        answer: `Salvation is God's gift of forgiveness, redemption, and eternal life made available to every person through faith in Jesus Christ. It means being rescued from the consequences of sin — separation from God and spiritual death — and restored to a right, living relationship with Him.\n\nThe Bible teaches salvation is by grace through faith — not by our own works or moral goodness (Ephesians 2:8-9). To receive salvation:\n\n1. Acknowledge that you are a sinner in need of God's forgiveness.\n2. Believe that Jesus Christ died for your sins and rose from the dead.\n3. Confess Jesus as your Lord and Savior from the heart.\n4. Repent — turn away from sin and turn fully toward God.\n\nSalvation is available to every person, right now, wherever they are. No one is too lost for God's grace.`,
        verse: { text: '"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast."', ref: 'Ephesians 2:8-9' }
    },
    {
        keywords: ['sinners prayer', 'become christian', 'receive jesus', 'how to receive jesus', 'how to accept jesus', 'give life to god'],
        topic: "Sinner's Prayer",
        answer: `If you want to give your life to Jesus Christ today, you can pray sincerely from your heart. Here is a simple prayer of faith:\n\n"Lord Jesus, I believe You are the Son of God. I confess that I am a sinner and I need Your forgiveness. I believe You died on the cross for my sins and rose again from the dead on the third day. I now open my heart and invite You in as my Lord and Savior. Forgive all my sins. Wash me clean with Your precious blood. Fill me with Your Holy Spirit and guide my life from this moment forward. Thank You, Jesus. Amen."\n\nIf you prayed that sincerely — welcome to God's family! Now find a Bible-believing church, read the Word of God daily, and tell someone about your decision. Your new life begins today.`,
        verse: { text: '"If you declare with your mouth, Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved."', ref: 'Romans 10:9' }
    },
    {
        keywords: ['grace', 'what is grace', 'amazing grace', 'unmerited favor', 'grace of god', 'grace and mercy'],
        topic: 'Grace',
        answer: `Grace is God's unmerited, unearned, undeserved favor lavished freely on sinners through Jesus Christ. It cannot be earned by religious performance, good deeds, or moral effort — it is pure, extravagant gift.\n\nGrace means:\n• God chose you before you ever chose Him\n• God loves you despite your failures and your past\n• God forgives you not because you deserve it, but because Jesus paid your debt in full\n• God equips you daily with His Spirit and strength to live for Him\n\nJohn Newton — a former slave trader who was radically transformed — captured grace in the world's most famous hymn: "Amazing grace, how sweet the sound, that saved a wretch like me. I once was lost, but now am found; was blind, but now I see."\n\nGrace is the engine of the entire Christian life — we are saved by it and we live by it every single day.`,
        verse: { text: '"For the grace of God has appeared that offers salvation to all people."', ref: 'Titus 2:11' }
    },

    /* ══════════════════════════════════════════════
       SECTION 5 — PRAYER
    ══════════════════════════════════════════════ */
    {
        keywords: ['why pray', 'importance of prayer', 'how to pray', 'prayer', 'why should christians pray'],
        topic: 'Prayer',
        answer: `Prayer is the living conversation between a child of God and their Heavenly Father. It is not merely a religious ritual or a last resort in crisis — it is the very breath of the soul and the heartbeat of a relationship with God.\n\nChristians pray because:\n• God invites and commands it: "Pray without ceasing" (1 Thessalonians 5:17)\n• Jesus Himself prayed constantly and modeled prayer for us\n• Prayer releases God's power into our real circumstances\n• Prayer aligns our hearts and will with God's perfect purposes\n• It builds trust, dependence, and deeper intimacy with the Father\n\nYou can pray anywhere, anytime, in any posture — on your knees, in your car, walking to work. God hears every sincere prayer. He is never too busy to listen to His children.`,
        verse: { text: '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."', ref: 'Philippians 4:6' }
    },
    {
        keywords: ["lord's prayer", "our father prayer", "the lord prayer", "matthew 6", "our father who art in heaven"],
        topic: "The Lord's Prayer",
        answer: `Jesus taught His disciples to pray what is known as the Lord's Prayer (Matthew 6:9-13):\n\n"Our Father in heaven, hallowed be Your name.\nYour kingdom come, Your will be done, on earth as it is in heaven.\nGive us today our daily bread.\nForgive us our debts, as we also have forgiven our debtors.\nAnd lead us not into temptation, but deliver us from the evil one.\nFor Yours is the kingdom, the power and the glory forever. Amen."\n\nThis prayer is a model covering six essential dimensions of prayer: worship of God, submission to His will, daily provision, forgiveness, mutual forgiveness of others, and protection from temptation and evil. It teaches us to come boldly to God as a loving, approachable Father.`,
        verse: { text: '"When you pray, say: Father, hallowed be your name, your kingdom come."', ref: 'Luke 11:2' }
    },

    /* ══════════════════════════════════════════════
       SECTION 6 — FAITH
    ══════════════════════════════════════════════ */
    {
        keywords: ['what is faith', 'faith', 'trust god', 'strengthen faith', 'grow in faith', 'how can i strengthen my faith', 'weak faith'],
        topic: 'Faith',
        answer: `Faith is confident, active trust in God — believing in His character, His promises, and His Word even when circumstances appear impossible or make no sense. It is not blind hope but a firm anchor rooted in the truth of who God is and what He has done.\n\nTo strengthen your faith:\n\n1. 📖 Read the Bible daily — "Faith comes by hearing, and hearing by the Word of God" (Romans 10:17)\n2. 🙏 Pray consistently — faith grows in the presence of God\n3. 📝 Record God's past faithfulness — review His answers to prayer\n4. 🤝 Fellowship with other believers who will encourage and sharpen you\n5. 👣 Step out in obedience — faith is exercised, not just contemplated\n6. 🔥 Trust God in trials — pressure refines and deepens authentic faith\n\nFaith does not eliminate questions or difficulty. It chooses to anchor firmly in God's proven truth amid every storm.`,
        verse: { text: '"Now faith is confidence in what we hope for and assurance about what we do not see."', ref: 'Hebrews 11:1' }
    },
    {
        keywords: ['doubt', 'doubting', 'questions about faith', 'losing faith', 'struggling faith', 'crisis of faith'],
        topic: 'Doubt & Faith',
        answer: `Doubt is not the opposite of faith — it is very often a doorway that leads to deeper and more genuine faith. Even the great figures of Scripture wrestled with doubt: Thomas doubted the resurrection, John the Baptist questioned from prison, the disciples were frightened on the stormy sea.\n\nIf you are experiencing doubt, know this: God is not offended by your honest questions. He is infinite and is big enough to handle every question you bring. Come to Him with your doubts in prayer. Go deeper into Scripture. Seek a wise pastor or godly Christian mentor.\n\nDoubt becomes dangerous only when it leads us to walk away from seeking God. When we bring our questions to Him, He uses those very questions to build something stronger, more genuine, and more beautiful in us than we could have imagined on our own.`,
        verse: { text: '"Immediately the boy\'s father exclaimed: I do believe; help me overcome my unbelief!"', ref: 'Mark 9:24' }
    },

    /* ══════════════════════════════════════════════
       SECTION 7 — FORGIVENESS
    ══════════════════════════════════════════════ */
    {
        keywords: ['forgiveness', 'what is forgiveness', 'how to forgive', 'forgiving', 'forgive others', 'meaning of forgiveness', 'unforgiveness'],
        topic: 'Forgiveness',
        answer: `Forgiveness is one of the most profound and transformative acts known to humanity — and it lies at the very heart of the Christian faith. God's forgiveness is the complete cancellation of our sin-debt through the sacrificial death of Jesus Christ. When we confess our sins, God "is faithful and just to forgive us our sins and to cleanse us from all unrighteousness" (1 John 1:9).\n\nChristians are also called to forgive others — not because they deserve it, but because we ourselves have been forgiven much. Unforgiveness is like drinking poison and expecting the other person to suffer; it chains us to bitterness and pain. Forgiveness is the key that unlocks our own prison.\n\nForgiveness does not mean excusing wrong behavior or pretending harm did not happen. It means releasing the person to God's justice and choosing to no longer allow their offense to define your life and your future.`,
        verse: { text: '"Forgive as the Lord forgave you."', ref: 'Colossians 3:13' }
    },

    /* ══════════════════════════════════════════════
       SECTION 8 — LOVE
    ══════════════════════════════════════════════ */
    {
        keywords: ['what does the bible say about love', 'love', 'god is love', 'christian love', 'love one another', '1 corinthians 13'],
        topic: 'Love',
        answer: `Love is the very nature of God Himself — "God is love" (1 John 4:8). The Bible describes love in its most perfect form in 1 Corinthians 13:\n\n"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails."\n\nThe greatest commandment is to love God completely and love our neighbor as ourselves. Jesus demonstrated the highest expression of love by laying down His life for us: "Greater love has no one than this: to lay down one's life for one's friends" (John 15:13).`,
        verse: { text: '"We love because he first loved us."', ref: '1 John 4:19' }
    },

    /* ══════════════════════════════════════════════
       SECTION 9 — HEAVEN & ETERNAL LIFE
    ══════════════════════════════════════════════ */
    {
        keywords: ['heaven', 'what is heaven', 'afterlife', 'eternal life', 'paradise', 'what does heaven look like'],
        topic: 'Heaven',
        answer: `Heaven is the eternal dwelling place of God and all who belong to Him through faith in Jesus Christ. The Bible describes it as a place of unimaginable beauty, perfect peace, and everlasting joy — where there is no more death, mourning, crying, or pain (Revelation 21:4).\n\nIn heaven, believers will:\n• See God face to face in all His glory\n• Worship Him without hindrance or distraction\n• Be reunited with loved ones who also knew Christ\n• Experience a fullness of life that no earthly language can fully capture\n\nC.S. Lewis described heaven as the place where life truly begins — all earthly experience being "only the cover and the title page." Jesus promised: "In my Father's house are many rooms… I am going there to prepare a place for you" (John 14:2).`,
        verse: { text: '"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain."', ref: 'Revelation 21:4' }
    },

    /* ══════════════════════════════════════════════
       SECTION 10 — HELL
    ══════════════════════════════════════════════ */
    {
        keywords: ['hell', 'what is hell', 'eternal punishment', 'lake of fire', 'separation from god', 'what happens when you die', 'eternal damnation'],
        topic: 'Hell',
        answer: `Hell, in Christian teaching, is the state of eternal separation from God — the ultimate consequence of rejecting His offer of grace and salvation. Jesus Himself spoke more about hell than almost any other subject, warning soberly of a place of outer darkness, weeping, and separation from all goodness.\n\nCrucially, hell is not God's desire for anyone. Peter tells us God "does not want anyone to perish but everyone to come to repentance" (2 Peter 3:9). Hell exists as a sobering reminder of the seriousness of sin and the absolute importance of responding to God's free invitation to be saved.\n\nThe good news — the Gospel — is that no one has to go there. Through sincere faith in Jesus Christ, every single person can be saved, forgiven, and granted eternal life with God.`,
        verse: { text: '"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."', ref: 'Romans 6:23' }
    },

    /* ══════════════════════════════════════════════
       SECTION 11 — THE HOLY SPIRIT
    ══════════════════════════════════════════════ */
    {
        keywords: ['holy spirit', 'spirit of god', 'what is the holy spirit', 'role of holy spirit', 'holy ghost', 'gifts of the spirit', 'fruits of the spirit'],
        topic: 'Holy Spirit',
        answer: `The Holy Spirit is the third Person of the Trinity — fully God — who indwells every believer from the moment of salvation. The Holy Spirit is not an impersonal force or mystical energy, but a divine Person with will, mind, and deep emotion.\n\nThe roles of the Holy Spirit include:\n• Convicting the world of sin and drawing people to Christ\n• Regenerating and permanently sealing believers at salvation\n• Teaching and illuminating the meaning of Scripture\n• Empowering Christians for witness, ministry, and service\n• Producing the Fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control\n• Distributing spiritual gifts to build up the Church\n• Interceding for us with wordless groans when we do not know how to pray\n\nJesus called the Holy Spirit the "Advocate," "Helper," and "Spirit of Truth" who would guide all believers into all truth.`,
        verse: { text: '"And I will ask the Father, and he will give you another advocate to help you and be with you forever — the Spirit of truth."', ref: 'John 14:16-17' }
    },
    {
        keywords: ['fruit of the spirit', 'love joy peace', 'galatians 5', 'spiritual fruit'],
        topic: 'Fruit of the Spirit',
        answer: `The Fruit of the Spirit is the natural outgrowth of the Holy Spirit's transforming work within a believer's life. Galatians 5:22-23 lists nine beautiful fruits:\n\n🍇 Love — the foundation; unconditional, self-giving care\n🍇 Joy — deep, settled gladness not dependent on circumstances\n🍇 Peace — inner calm that surpasses human understanding\n🍇 Patience — long-suffering; enduring with grace and dignity\n🍇 Kindness — active goodness and warmth toward others\n🍇 Goodness — moral excellence expressed in generous action\n🍇 Faithfulness — reliable, trustworthy, consistent character\n🍇 Gentleness — strength under control; humble, measured power\n🍇 Self-Control — mastery over fleshly impulses and appetites\n\nThese qualities are not produced by human effort or willpower alone — they are supernaturally grown by the Holy Spirit as we remain "abiding in the vine" (John 15:4-5).`,
        verse: { text: '"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control."', ref: 'Galatians 5:22-23' }
    },

    /* ══════════════════════════════════════════════
       SECTION 12 — SIN
    ══════════════════════════════════════════════ */
    {
        keywords: ['what is sin', 'sin', 'sinful nature', 'original sin', 'fall of man', 'temptation', 'sinning'],
        topic: 'Sin',
        answer: `Sin is any thought, word, action, or omission that falls short of God's perfect standard — it is essentially rebellion against or independence from God. The Bible declares "all have sinned and fall short of the glory of God" (Romans 3:23). Sin entered the world through Adam and Eve's disobedience in the Garden of Eden (Genesis 3), introducing death and brokenness into all of creation.\n\nSin separates us from a holy God. But God, in His infinite love, did not abandon us in that broken state. He sent Jesus to atone for all sin once and for all. When we confess our sins to Christ, we receive full forgiveness and the Holy Spirit's power to overcome sin's dominion in our lives.\n\nChristians still struggle with sin — we are not yet perfect. But we are not slaves to it. Through Christ, we walk in increasing freedom, holiness, and transformation day by day.`,
        verse: { text: '"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."', ref: '1 John 1:9' }
    },

    /* ══════════════════════════════════════════════
       SECTION 13 — WORSHIP
    ══════════════════════════════════════════════ */
    {
        keywords: ['worship', 'why is worship important', 'what is worship', 'praise', 'praise god', 'how to worship'],
        topic: 'Worship',
        answer: `Worship is the profound act of recognizing and responding to God's supreme worth — offering Him the glory, honor, praise, and love He fully deserves. It is far more than singing in church on Sunday; genuine worship is an entire lifestyle.\n\nWorship includes:\n• Singing praises and lifting up His name\n• Reading and meditating deeply on Scripture\n• Prayer, thanksgiving, and adoration\n• Living obediently according to God's Word\n• Serving others in practical love\n• Giving generously of time, talent, and treasure\n• Sharing the Gospel with those who do not yet know Him\n\nJesus taught that the Father seeks worshipers who worship "in spirit and in truth" — not cold outward ritual, but warm, heartfelt, authentic devotion rooted in the truth of who God really is. Worship transforms the worshiper: the more we focus on God's greatness, the smaller every problem becomes.`,
        verse: { text: '"Worship the Lord your God, and his blessing will be on your food and water."', ref: 'Exodus 23:25' }
    },

    /* ══════════════════════════════════════════════
       SECTION 14 — BAPTISM
    ══════════════════════════════════════════════ */
    {
        keywords: ['baptism', 'what is baptism', 'water baptism', 'baptized', 'why be baptized', 'christening'],
        topic: 'Baptism',
        answer: `Baptism is the sacred Christian sacrament or ordinance in which a believer is immersed in or sprinkled with water as a public declaration of their faith in Jesus Christ. It powerfully symbolizes three realities:\n\n• Death to the old sinful self (going down into the water)\n• Burial with Christ in His death\n• Resurrection to brand new life in Christ (rising up out of the water)\n\nBaptism does not save a person — it is salvation's public declaration, not its source. It is an outward, visible expression of an inward, spiritual transformation that has already taken place.\n\nJesus Himself commanded baptism for all disciples (Matthew 28:19), and He was baptized by John in the Jordan River — setting the example. Every new believer is warmly encouraged to be baptized in obedience to Christ's clear command.`,
        verse: { text: '"Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit."', ref: 'Acts 2:38' }
    },

    /* ══════════════════════════════════════════════
       SECTION 15 — HOPE
    ══════════════════════════════════════════════ */
    {
        keywords: ['hope', 'christian hope', 'hope in god', 'hopeless', 'what does the bible teach about hope'],
        topic: 'Hope',
        answer: `Christian hope is not wishful thinking or optimistic guessing — it is certain, confident expectation firmly grounded in the unchanging character of God and His unbreakable promises. The Bible calls it "an anchor for the soul, firm and secure" (Hebrews 6:19).\n\nChristian hope is found in:\n• God's unfailing love and faithfulness across all generations\n• The resurrection of Jesus — the ultimate proof that death is not the final word\n• The promise of eternal life for all who believe\n• The Holy Spirit's comforting presence during suffering and uncertainty\n• God's promise to work all things together for good for those who love Him\n\nThis hope enables believers to face suffering, uncertainty, loss, and even death without despair or bitterness. It is the unshakeable confidence that the story is not over — and the best chapter is still ahead.`,
        verse: { text: '"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."', ref: 'Jeremiah 29:11' }
    },

    /* ══════════════════════════════════════════════
       SECTION 16 — PEACE
    ══════════════════════════════════════════════ */
    {
        keywords: ['peace', 'inner peace', 'peace of god', 'peace mind', 'what does christianity teach about peace'],
        topic: 'Peace',
        answer: `Peace is among the most precious gifts God freely offers His children. The Bible speaks of a peace that "surpasses all human understanding" — a supernatural, divine tranquility that stands guard over your heart and mind even in the middle of chaos, loss, grief, or uncertainty.\n\nThis peace flows from:\n• Trusting completely in God's sovereign control over every circumstance\n• Maintaining daily prayer and time in Scripture\n• Releasing every anxiety to God through thanksgiving\n• Believing without wavering that God works all things for the good of those who love Him\n• Knowing your eternal destiny is securely settled in Christ\n\nJesus said, "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid" (John 14:27). His peace is not circumstantial — it is supernatural.`,
        verse: { text: '"The Lord gives strength to his people; the Lord blesses his people with peace."', ref: 'Psalm 29:11' }
    },

    /* ══════════════════════════════════════════════
       SECTION 17 — DRAWING CLOSER TO GOD
    ══════════════════════════════════════════════ */
    {
        keywords: ['closer to god', 'draw near to god', 'relationship with god', 'know god', 'deepen faith', 'how do i become closer to god'],
        topic: 'Drawing Closer to God',
        answer: `Growing closer to God is the most fulfilling and transformative pursuit available to the human heart. Here are powerful, practical ways to deepen your relationship with Him:\n\n1. 📖 Read the Bible daily — God speaks through His living Word\n2. 🙏 Pray without ceasing — talk to God honestly, intimately, consistently\n3. 🏠 Attend a Bible-believing church — we grow together, never alone\n4. 🎵 Worship daily — praise shifts focus from problems to God's greatness\n5. ✝ Obey His commands — obedience always draws us deeper in\n6. 🤝 Serve others — we encounter Jesus in acts of genuine love\n7. 🌿 Surrender completely — release control and trust God with everything\n8. 📔 Keep a spiritual journal — record God's answers, lessons, and faithfulness\n\nThe promise is crystal clear and unconditional: "Draw near to God, and He will draw near to you" (James 4:8).`,
        verse: { text: '"Come near to God and he will come near to you."', ref: 'James 4:8' }
    },

    /* ══════════════════════════════════════════════
       SECTION 18 — SPIRITUAL GROWTH
    ══════════════════════════════════════════════ */
    {
        keywords: ['spiritual growth', 'grow spiritually', 'spiritual maturity', 'christian growth', 'sanctification', 'discipleship', 'become more like jesus'],
        topic: 'Spiritual Growth',
        answer: `Spiritual growth — known theologically as sanctification — is the lifelong, Holy Spirit-driven process of becoming increasingly like Jesus Christ in character, thought, desire, and action. It is not instant; it is a glorious, sometimes difficult journey.\n\nKey disciplines for deep spiritual growth:\n\n• Daily Scripture reading and prayerful meditation\n• Persistent, honest, vulnerable prayer\n• Committed church community and accountability\n• Consistent serving and generous giving\n• Fasting — quieting the flesh to hear God more clearly\n• Memorizing Scripture — "I have hidden your word in my heart" (Psalm 119:11)\n• Confession and repentance when we fall — getting up, not staying down\n• Practicing the continuous awareness of God's presence throughout each day\n\nGrowth is not achieved by straining in human strength — it comes by yielding completely to the Holy Spirit, who transforms us from within.`,
        verse: { text: '"We all…are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit."', ref: '2 Corinthians 3:18' }
    },

    /* ══════════════════════════════════════════════
       SECTION 19 — CHRISTIAN LIVING
    ══════════════════════════════════════════════ */
    {
        keywords: ['christian living', 'how to live as christian', 'christian lifestyle', 'what does it mean to be christian', 'daily christian life'],
        topic: 'Christian Living',
        answer: `Christian living is the daily, practical practice of following Jesus Christ in every area of life — at home, at work, in relationships, in how we spend money and time. It is not about achieving perfection; it is about direction — moving steadily toward greater Christlikeness each day.\n\nPractical elements of authentic Christian living:\n\n• Start every day with God — prayer and Scripture before the noise of the world\n• Let love guide every single interaction — at home, at work, with strangers\n• Practice integrity in small, unseen things — character is built in private\n• Be quick to forgive and slow to anger\n• Seek God's will before making major decisions\n• Share your faith naturally and gently in conversation\n• Steward your time, money, and gifts faithfully for God's glory\n• Care actively for the poor, widows, orphans, and the vulnerable\n• Guard your mind — what you consistently consume shapes who you become`,
        verse: { text: '"Whether you eat or drink or whatever you do, do it all for the glory of God."', ref: '1 Corinthians 10:31' }
    },

    /* ══════════════════════════════════════════════
       SECTION 20 — ENCOURAGEMENT
    ══════════════════════════════════════════════ */
    {
        keywords: ['encourage', 'encouragement', 'i need encouragement', 'feeling down', 'discouraged', 'inspire me', 'give me encouragement', 'need strength'],
        topic: 'Encouragement',
        answer: `Beloved child of God — whatever you are facing today, you are not alone. The God who spoke galaxies into existence knows your name, knows your struggle, knows every tear you have cried, and holds you securely in His hands.\n\nRemember who you are and what you have:\n• You are fearfully and wonderfully made (Psalm 139:14)\n• God has good plans for your future — plans of hope (Jeremiah 29:11)\n• Nothing in all creation can separate you from God's love (Romans 8:38-39)\n• His strength is made perfect precisely in your weakness (2 Corinthians 12:9)\n• Weeping may last through the night, but joy comes in the morning (Psalm 30:5)\n• With God, absolutely all things are possible (Matthew 19:26)\n\nRaise your head, dear one. The Lord of all Heaven and Earth is personally on your side. You were not made to be defeated — you were made to overcome. Keep going.`,
        verse: { text: '"I can do all this through him who gives me strength."', ref: 'Philippians 4:13' }
    },

    /* ══════════════════════════════════════════════
       SECTION 21 — ANXIETY & FEAR
    ══════════════════════════════════════════════ */
    {
        keywords: ['anxiety', 'fear', 'worry', 'afraid', 'anxious', 'stressed', 'depression', 'troubled heart', 'overthinking'],
        topic: 'Anxiety & Fear',
        answer: `God's Word has profound comfort and practical power for every anxious heart. Anxiety is real and deeply human, but it does not have the final word over your life.\n\nGod's prescription for anxiety:\n\n1. Cast all your anxiety on Him — He genuinely cares for you (1 Peter 5:7)\n2. Pray with thanksgiving about everything, large and small (Philippians 4:6-7)\n3. Guard your mind with what is true, noble, right, pure, and praiseworthy (Philippians 4:8)\n4. Declare God's Word aloud over your situation — speak truth to the darkness\n5. Remember: "God has not given us a spirit of fear, but of power, love, and a sound mind" (2 Timothy 1:7)\n6. Seek godly community, counseling, and medical care when needed — this is wisdom, not weakness\n\nPractical tip: When anxiety rises like a wave, breathe slowly and pray: "Jesus, I trust You." He always answers.`,
        verse: { text: '"Cast all your anxiety on him because he cares for you."', ref: '1 Peter 5:7' }
    },

    /* ══════════════════════════════════════════════
       SECTION 22 — SUFFERING & TRIALS
    ══════════════════════════════════════════════ */
    {
        keywords: ['suffering', 'why does god allow suffering', 'pain', 'trials', 'hardship', 'why bad things happen', 'problem of evil', 'why is life hard'],
        topic: 'Suffering & Trials',
        answer: `One of the deepest human questions is: "Why does a loving God allow suffering?" While no single answer resolves every instance of pain, Scripture offers profound perspective and genuine comfort:\n\n• Suffering produces spiritual refinement — as intense fire purifies precious gold (1 Peter 1:7)\n• It develops authentic compassion for others who are in pain\n• Trials drive us toward healthy dependence on God rather than self-sufficiency\n• God sovereignly redeems suffering — bringing real good from what the enemy meant for harm (Romans 8:28)\n• Jesus Himself suffered in every way we do — He understands pain from the inside, not just from above\n\nMost critically: God is present with us in suffering. He does not watch from a distance. He weeps with us (John 11:35). He carries us when we cannot walk. He turns even the darkest valleys into unexpected places of grace and transformation.`,
        verse: { text: '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."', ref: 'Romans 8:28' }
    },

    /* ══════════════════════════════════════════════
       SECTION 23 — THE CHURCH
    ══════════════════════════════════════════════ */
    {
        keywords: ['church', 'what is the church', 'why attend church', 'importance of church', 'christian community', 'fellowship', 'body of christ'],
        topic: 'The Church',
        answer: `The Church is not a building — it is the living Body of Christ, the community of all who have been saved through faith in Jesus across all times and places. The New Testament Greek word ekklesia means "the called-out ones" — people called by God out of the world and into His kingdom family.\n\nWhy the Church matters deeply:\n• We were created for community — flourishing happens together, not in isolation\n• We grow faster, stronger, and deeper in faithful community\n• We encourage, challenge, and hold one another accountable\n• Worshiping together multiplies and magnifies our experience of God\n• The Church is God's primary instrument for reaching the lost world\n\nFinding a good, Bible-faithful church — where Scripture is taught clearly and love is practiced genuinely — is one of the most important and consequential decisions a Christian can ever make.`,
        verse: { text: '"Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another."', ref: 'Hebrews 10:25' }
    },

    /* ══════════════════════════════════════════════
       SECTION 24 — ARMOR OF GOD
    ══════════════════════════════════════════════ */
    {
        keywords: ['armor of god', 'spiritual warfare', 'ephesians 6', 'spiritual battle', 'spiritual weapons', 'warfare prayer', 'the devil'],
        topic: 'Armor of God',
        answer: `Paul describes the full spiritual armor God provides every believer in Ephesians 6:13-17:\n\n⚔ Belt of Truth — standing firm on God's truth counters every deception\n🛡 Breastplate of Righteousness — living right protects the heart and conscience\n👟 Gospel of Peace on your feet — readiness to share the Good News everywhere\n🔰 Shield of Faith — extinguishing every fiery dart the enemy launches\n⛑ Helmet of Salvation — protecting your mind with the full assurance of salvation\n⚔ Sword of the Spirit — the Word of God; our only offensive weapon in battle\n\nOur struggle is never ultimately against flesh and blood but against spiritual forces of evil. We fight from a position of total victory — Christ has already defeated the enemy at the cross. We use this armor to enforce and apply His victory in our daily lives.`,
        verse: { text: '"Put on the full armor of God, so that you can take your stand against the devil\'s schemes."', ref: 'Ephesians 6:11' }
    },

    /* ══════════════════════════════════════════════
       SECTION 25 — CREATION
    ══════════════════════════════════════════════ */
    {
        keywords: ['creation', 'genesis', 'how was the world created', 'adam and eve', 'garden of eden', 'god created', 'origin of life'],
        topic: 'Creation',
        answer: `Genesis 1 opens with the majestic, thunderous declaration: "In the beginning, God created the heavens and the earth." Christians believe God is the sovereign, personal Creator of all existence — matter, energy, time, space, and every form of life.\n\nKey truths about creation:\n• God created ex nihilo — out of absolutely nothing — by the power of His spoken word\n• Human beings are the crown of creation, uniquely made "in the image of God" (Imago Dei)\n• Creation reveals God's character: "The heavens declare the glory of God" (Psalm 19:1)\n• God declared creation "very good" — the physical world and our bodies are not evil but gift\n• Sin broke creation's harmony, but Christ's redemption is restoring it — culminating in the "new creation" of Revelation 21-22\n\nEvery sunrise, mountain, ocean, child's laugh, and galaxy is a whisper of the Creator's glory and an invitation to worship Him.`,
        verse: { text: '"The heavens declare the glory of God; the skies proclaim the work of his hands."', ref: 'Psalm 19:1' }
    },

    /* ══════════════════════════════════════════════
       SECTION 26 — HEALING
    ══════════════════════════════════════════════ */
    {
        keywords: ['healing', 'prayer for healing', 'heal me', 'sick', 'disease', 'faith healing', 'miracle', 'james 5'],
        topic: 'Healing & Prayer',
        answer: `The Bible affirms that God is Jehovah-Rapha — "the Lord who heals" (Exodus 15:26). Jesus healed the sick, raised the dead, gave sight to the blind, cleansed the leprous, and straightened the crippled. He is the same yesterday, today, and forever (Hebrews 13:8).\n\nHow to pray faithfully for healing:\n1. Come boldly and persistently to God in faith — He is a compassionate Father who listens\n2. Pray specifically — name the illness, name the person, name the outcome you are asking for\n3. Invite trusted believers to pray together — the prayer of agreement carries tremendous power (James 5:14-16)\n4. Anoint with oil as a symbolic act of full consecration and dependence on God\n5. Trust God's timing, methods, and wisdom — He may heal instantly, progressively, or through skilled doctors\n6. Praise Him regardless of the visible outcome — faith endures joyfully in the waiting\n\nEven when physical healing does not come exactly as asked, God promises grace sufficient for every trial and perfect, complete restoration in eternity.`,
        verse: { text: '"And the prayer offered in faith will make the sick person well; the Lord will raise them up."', ref: 'James 5:15' }
    },

    /* ══════════════════════════════════════════════
       SECTION 27 — TITHING & GENEROSITY
    ══════════════════════════════════════════════ */
    {
        keywords: ['tithing', 'tithe', 'giving', 'offering', 'generosity', 'stewardship', 'money', 'finances', 'malachi 3'],
        topic: 'Tithing & Generosity',
        answer: `The Bible teaches that everything we have belongs to God — we are stewards and managers, not the ultimate owners of anything. Tithing (giving the first 10% of income to God's work) is a principle established in the Old Testament and affirmed by Jesus who said you "should have" done it (Matthew 23:23).\n\nWhy Christians give generously:\n• Giving demonstrates active trust that God is our true Provider\n• It loosens the dangerous grip of materialism on our hearts and minds\n• It directly funds the spread of the Gospel around the world\n• God promises to bless generous, faithful givers abundantly: "Give and it will be given to you — pressed down, shaken together, running over" (Luke 6:38)\n\nMalachi 3:10 contains a bold, open invitation: "Bring the whole tithe into the storehouse… and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." Give cheerfully, generously, and from genuine faith — not from fear or compulsion.`,
        verse: { text: '"God loves a cheerful giver."', ref: '2 Corinthians 9:7' }
    },

    /* ══════════════════════════════════════════════
       SECTION 28 — MOTIVATION
    ══════════════════════════════════════════════ */
    {
        keywords: ['motivate me', 'christian motivation', 'inspire', 'strength', 'christian inspiration', 'keep going', 'dont give up', 'i want to give up'],
        topic: 'Christian Motivation',
        answer: `Rise up, warrior of the living God! Your struggle today is writing the testimony that will encourage someone tomorrow.\n\nRemember who you are and what you carry in Christ:\n\n⚡ You are more than a conqueror through Christ (Romans 8:37)\n⚡ You carry the same Spirit that raised Jesus from the dead (Romans 8:11)\n⚡ Greater is He who is in you than he who is in the world (1 John 4:4)\n⚡ No weapon formed against you shall ultimately prosper (Isaiah 54:17)\n⚡ God began a great work in you — and He will absolutely complete it (Philippians 1:6)\n⚡ Your latter end shall be greater than your beginning (Job 42:12)\n⚡ Those who wait on the Lord shall renew their strength (Isaiah 40:31)\n\nThe Creator of all things is personally invested in your breakthrough and your victory. Press. Pray. Believe. Your morning is coming.`,
        verse: { text: '"No, in all these things we are more than conquerors through him who loved us."', ref: 'Romans 8:37' }
    },

    /* ══════════════════════════════════════════════
       SECTION 29 — FASTING
    ══════════════════════════════════════════════ */
    {
        keywords: ['fasting', 'what is fasting', 'why fast', 'christian fasting', 'how to fast', 'daniel fast'],
        topic: 'Fasting',
        answer: `Fasting is the voluntary, intentional abstinence from food (and sometimes other activities like social media or entertainment) for a dedicated period of time focused entirely on seeking God. Jesus said "when you fast" — not "if" — strongly implying it is a normal, expected part of Christian spiritual life.\n\nPurposes and benefits of fasting:\n• Humbling the soul deeply before a holy God\n• Intensifying prayer and sharpening sensitivity to God's voice\n• Breaking stubborn spiritual strongholds through sustained prayer\n• Expressing genuine mourning, repentance, or desperate need before God\n• Demonstrating that your hunger for God exceeds your hunger for food\n\nFasting is not about earning God's attention — He always listens. It is about quieting the loud demands of physical appetite so that our spiritual ears become sharply tuned to God's voice. Isaiah 58 defines true fasting as also caring practically for the poor, freeing the oppressed, and clothing the naked.`,
        verse: { text: '"Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke?"', ref: 'Isaiah 58:6' }
    },

    /* ══════════════════════════════════════════════
       SECTION 30 — GREETING / HELLO
    ══════════════════════════════════════════════ */
    {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening', 'good afternoon', 'how are you', 'what can you do', 'who are you'],
        topic: 'Welcome',
        answer: `Grace and peace to you in the name of our Lord Jesus Christ! 🕊\n\nI am the Light of the Word — your Christian Spiritual Assistant, here to help you explore the depths of the Bible, understand foundational Christian doctrine, receive encouragement, and grow deeper in your faith journey.\n\nYou can ask me about:\n• Jesus Christ, the Gospels, and His life\n• Prayer, worship, fasting, and spiritual disciplines\n• Salvation, grace, and forgiveness\n• Heaven, eternal life, and biblical prophecy\n• The Holy Spirit and His gifts and fruit\n• Christian living, relationships, and daily discipleship\n• Specific Bible verses and passages\n• Encouragement and hope for life's toughest challenges\n\nWhat spiritual question is on your heart right now?`
    },

    /* ══════════════════════════════════════════════
       SECTION 31 — GRATITUDE
    ══════════════════════════════════════════════ */
    {
        keywords: ['thank you', 'thanks', 'thank', 'bless you', 'amen', 'praise god', 'praise the lord', 'hallelujah', 'blessed'],
        topic: 'Gratitude',
        answer: `To God be all the glory! 🙌 It is my joy and my privilege to serve you on your spiritual journey.\n\nRemember this powerful truth: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus" (1 Thessalonians 5:18).\n\nA grateful heart is literally a magnet for God's continued blessing and presence. Every time you choose to thank God — for the magnificent things and the small ones, in the easy seasons and the painful ones — you are declaring His sovereignty and His goodness over your life. That is an act of faith.\n\nMay God continue to bless you abundantly, guide your every step, and fill you to overflowing with His wisdom, love, and peace. Come back any time you need spiritual guidance or encouragement — the Word of God is an inexhaustible well.`,
        verse: { text: '"Give thanks to the Lord, for he is good; his love endures forever."', ref: 'Psalm 107:1' }
    },
];

/* ================================================================
   FALLBACK RESPONSES
   Used when no keyword match is found above a minimum threshold
================================================================ */
const FALLBACKS = [
    {
        topic: 'Christian Guidance',
        answer: `That is a meaningful and thoughtful question. While I may not have a specific answer stored for this exact topic, I want to share a timeless truth that may guide you:\n\nSeek God first in all things. The book of Proverbs tells us: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight" (Proverbs 3:5-6).\n\nFor deeper study on your specific question, I warmly recommend:\n• A good Study Bible with commentary\n• Speaking personally with your pastor or a trusted spiritual mentor\n• Trusted Christian resources like BibleGateway.com, GotQuestions.org, or Desiring God`,
        verse: { text: '"Trust in the Lord with all your heart and lean not on your own understanding."', ref: 'Proverbs 3:5' }
    },
    {
        topic: 'Seeking Wisdom',
        answer: `What a rich question — the Bible is an inexhaustible treasure, and there is always more to discover.\n\nI encourage you to bring this question before God in prayer. He has made a beautiful promise to every sincere seeker: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you" (James 1:5).\n\nYou may also find wonderful answers by:\n• Searching Scripture through BibleGateway.com\n• Reading a commentary on the relevant Bible passage\n• Asking a trusted pastor or a mature Christian friend`,
        verse: { text: '"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault."', ref: 'James 1:5' }
    },
    {
        topic: 'Christian Guidance',
        answer: `I receive your question with genuine care. While my knowledge base may not cover every spiritual topic in detail, I want you to know that God's Word speaks profoundly to every human situation, longing, and question.\n\nHere is my sincere encouragement: Open one of the four Gospels — Matthew, Mark, Luke, or John — and simply read the life of Jesus. His words, His compassion, His actions, and His power will speak directly to whatever you are seeking. He is ultimately the answer to every deep human question.\n\nGod bless you on your journey.`,
        verse: { text: '"Jesus answered, I am the way and the truth and the life."', ref: 'John 14:6' }
    },
];

/* ================================================================
   STATE
================================================================ */
let isDark = localStorage.getItem('lofw-theme') === 'dark';
let fallbackIdx = 0;

/* ================================================================
   THEME MANAGEMENT
================================================================ */
function applyTheme() {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-btn').innerHTML = '🌙 <span>Dark</span>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-btn').innerHTML = '☀️ <span>Light</span>';
    }
}
applyTheme();  /* Apply saved preference on load */

document.getElementById('theme-btn').addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('lofw-theme', isDark ? 'dark' : 'light');
    applyTheme();
});

/* ================================================================
   KEYWORD SEARCH ENGINE
   Scores each KB entry against the user's query and returns the
   best match if its score exceeds the minimum threshold.
================================================================ */
function findAnswer(query) {
    const q = query.toLowerCase().trim();
    let best = null, bestScore = 0;

    for (const entry of KB) {
        let score = 0;

        /* Phrase-level match — weight by word count */
        for (const kw of entry.keywords) {
            if (q.includes(kw)) {
                score += kw.split(' ').length * 2;
            }
        }

        /* Word-level partial match */
        const words = q.split(/\s+/);
        for (const word of words) {
            if (word.length > 3) {
                for (const kw of entry.keywords) {
                    if (kw.includes(word)) score += 1;
                }
            }
        }

        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }

    return bestScore >= 2 ? best : null;
}

/* ================================================================
   TIMESTAMP HELPER
================================================================ */
function getTimestamp() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/* ================================================================
   RENDER A MESSAGE BUBBLE
================================================================ */
function renderMessage(role, content, time) {
    const chatArea = document.getElementById('chat-area');
    const typingRow = document.getElementById('typing-row');

    /* Outer row */
    const row = document.createElement('div');
    row.className = `msg-row ${role}`;

    /* Avatar */
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = role === 'bot' ? '✝' : '👤';

    /* Bubble wrapper */
    const wrap = document.createElement('div');
    wrap.className = 'bubble-wrap';

    /* Bubble */
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    /* Topic badge (bot only) */
    if (role === 'bot' && content.topic) {
        const badge = document.createElement('div');
        badge.className = 'topic-badge';
        badge.textContent = content.topic;
        bubble.appendChild(badge);
    }

    /* Answer text */
    const text = document.createElement('div');
    text.style.whiteSpace = 'pre-line';
    text.textContent = role === 'bot' ? content.answer : content;
    bubble.appendChild(text);

    /* Bible verse card (bot only) */
    if (role === 'bot' && content.verse) {
        const card = document.createElement('div');
        card.className = 'verse-card';
        card.textContent = content.verse.text;

        const ref = document.createElement('span');
        ref.className = 'verse-ref';
        ref.textContent = '— ' + content.verse.ref;
        card.appendChild(ref);
        bubble.appendChild(card);
    }

    wrap.appendChild(bubble);

    /* Timestamp */
    const ts = document.createElement('div');
    ts.className = 'msg-time';
    ts.textContent = time || getTimestamp();
    wrap.appendChild(ts);

    /* Assemble row */
    if (role === 'bot') {
        row.appendChild(avatar);
        row.appendChild(wrap);
    } else {
        row.appendChild(wrap);
        row.appendChild(avatar);
    }

    chatArea.insertBefore(row, typingRow);
    row.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

/* ================================================================
   TYPING INDICATOR
================================================================ */
function showTyping() {
    document.getElementById('typing-row').classList.add('active');
    scrollToBottom();
}
function hideTyping() {
    document.getElementById('typing-row').classList.remove('active');
}
function scrollToBottom() {
    const a = document.getElementById('chat-area');
    a.scrollTop = a.scrollHeight;
}

/* ================================================================
   PROCESS & RESPOND TO USER MESSAGE
================================================================ */
function processMessage(text) {
    text = text.trim();
    if (!text) return;

    /* Render user message */
    renderMessage('user', text);

    /* Show typing indicator with realistic delay */
    showTyping();
    const delay = 800 + Math.random() * 700;

    setTimeout(() => {
        hideTyping();

        /* Search the knowledge base */
        let result = findAnswer(text);

        /* Use rotating fallback if no match found */
        if (!result) {
            result = FALLBACKS[fallbackIdx % FALLBACKS.length];
            fallbackIdx++;
        }

        renderMessage('bot', result);
    }, delay);
}

/* ================================================================
   SEND BUTTON
================================================================ */
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input');
    processMessage(input.value);
    input.value = '';
    input.style.height = 'auto';
});

/* ================================================================
   KEYBOARD — ENTER TO SEND / SHIFT+ENTER FOR NEW LINE
================================================================ */
document.getElementById('user-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const input = document.getElementById('user-input');
        processMessage(input.value);
        input.value = '';
        input.style.height = 'auto';
    }
});

/* ================================================================
   AUTO-RESIZE TEXTAREA
================================================================ */
document.getElementById('user-input').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

/* ================================================================
   CLEAR CHAT BUTTON
================================================================ */
document.getElementById('clear-btn').addEventListener('click', () => {
    const chatArea = document.getElementById('chat-area');
    const typingRow = document.getElementById('typing-row');

    /* Remove all messages except the typing row */
    while (chatArea.firstChild && chatArea.firstChild !== typingRow) {
        chatArea.removeChild(chatArea.firstChild);
    }

    /* Re-insert a fresh welcome card */
    const wc = document.createElement('div');
    wc.className = 'welcome-card';
    wc.innerHTML = `
    <div class="cross">✝</div>
    <h2>Welcome, Beloved</h2>
    <p>Chat cleared. I am ready to guide you with God's Word. Ask anything about the Bible, Jesus, prayer, faith, or Christian living.</p>
    <div class="open-verse">
      "Be still, and know that I am God."
      <span class="verse-ref-sm">— Psalm 46:10</span>
    </div>`;
    chatArea.insertBefore(wc, typingRow);
});

/* ================================================================
   TOPIC NAVIGATION PILLS (header)
================================================================ */
document.querySelectorAll('.topic-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
        processMessage(btn.getAttribute('data-q'));
    });
});

/* ================================================================
   QUICK-START BUTTONS (delegated to chat area)
================================================================ */
document.getElementById('chat-area').addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-btn');
    if (btn) {
        processMessage(btn.getAttribute('data-q'));
    }
});

/* ================================================================
   BACKGROUND PARTICLE CANVAS ANIMATION
   Gently rising particles for a peaceful, spiritual atmosphere
================================================================ */
(function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    /* Individual particle constructor */
    function Particle() {
        this.reset = function () {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.radius = Math.random() * 2.5 + 0.5;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = 0.15 + Math.random() * 0.25;
            this.opacity = Math.random() * 0.5 + 0.10;
            this.hue = 200 + Math.random() * 40;   /* blue-cyan range */
        };
        this.reset();

        this.update = function () {
            this.y -= this.speed;
            this.x += Math.sin(this.angle + this.y * 0.008) * 0.4;
            if (this.y < -10) { this.reset(); this.y = H + 10; }
        };

        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
            ctx.fill();
        };
    }

    function init() {
        resize();
        particles = Array.from({ length: 80 }, () => new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p) => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
})();