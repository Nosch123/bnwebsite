/**
 * Brand New World (BNW) - Nation Roleplay Wiki Data
 * Exact Major Events and Wars as provided by the server lore.
 */

const INITIAL_SEASONS_DATA = [
  {
    id: "season-4",
    number: 4,
    year: "1992",
    type: "Semi Custom",
    isLive: true,
    tagline: "Post-Cold War era — A shifting world order in 1992.",
    description: "Season 4 is set in 1992 following the dissolution of the Eastern Bloc. Nations navigate emerging regional powers, shifting borders, and new diplomatic spheres in an active roleplay timeline.",
    majorWars: [],
    majorEvents: [],
    minorEvents: []
  },
  {
    id: "season-3",
    number: 3,
    year: "2026",
    type: "Semi Custom",
    isLive: false,
    tagline: "Escalation in a fractured modern world.",
    description: "Season 3 featured modern geopolitical conflicts across Eastern Europe, the Balkans, East Asia, and global crisis points.",
    majorWars: [
      {
        id: "s3-w1",
        title: "Korean War",
        attacker: ["North Korea"],
        defender: ["South Korea", "NATO and Allies", "China"],
        winner: "China"
      },
      {
        id: "s3-w2",
        title: "Serbia-Bosnia War",
        attacker: ["Serbia"],
        defender: ["Bosnia"],
        winner: "Bosnia"
      },
      {
        id: "s3-w3",
        title: "Russo-Ukrainian War",
        attacker: ["Russia", "Belarus"],
        defender: ["Ukraine"],
        winner: "Russia"
      },
      {
        id: "s3-w4",
        title: "Poland-Belarus War",
        attacker: ["Poland"],
        defender: ["Belarus", "Russia"],
        winner: "Belarus"
      }
    ],
    majorEvents: [
      {
        id: "s3-e1",
        title: "1. U.S. Forces Capture Nicolás Maduro",
        date: "January 3, 2026",
        summary: `Explosions and aircraft were heard over Caracas before dawn as American forces struck Venezuelan military positions and carried out a raid to capture Nicolás Maduro. Within hours, President Donald Trump announced that Maduro and his wife, Cilia Flores, had been taken out of the country and were being brought to the United States to face federal charges. Washington describes the operation as the arrest of an indicted dictator accused of involvement in drug trafficking. Venezuelan officials condemn it as an attack on their sovereignty and demand the couple’s return. Maduro’s removal leaves the government’s remaining leaders and security forces in control of their positions, but facing an immediate struggle over who can speak for Venezuela and what relationship the country will now have with the United States.

The raid sends shockwaves through Latin America. Venezuelans celebrate Maduro’s capture; others fear further strikes or internal fighting. Governments across the region call for restraint as the United Nations prepares to address the operation. Oil traders watch Venezuela closely, with the future of its exports and sanctions uncertain. Maduro is in U.S. custody, but Venezuela’s political future remains unsettled. The choices made in Caracas, Washington, and neighboring capitals over the coming days will determine whether his capture leads to negotiations, a contested transition, or a wider crisis.`
      },
      {
        id: "s3-e2",
        title: "2. Syria | Government Advances Across the Northeast",
        date: "January 2026",
        summary: `A new phase of Syria’s civil conflict has erupted after talks between Damascus and the Kurdish-led Syrian Democratic Forces break down. Forces loyal to President Ahmed al-Sharaa advance across northern and eastern Syria, taking control of Raqqa, Deir ez-Zor, and strategic oil fields as SDF units withdraw from large areas they have governed for years. The speed of the advance dramatically strengthens Damascus. Since the fall of Bashar al-Assad in December 2024, al-Sharaa’s government has sought to reunify the country under a single state. Its latest gains bring that goal closer, but fighting and displacement leave Kurdish communities deeply concerned about their security and political rights. Both sides subsequently agree to a ceasefire and a plan to integrate SDF forces and civilian institutions into the Syrian state. Carrying out that agreement will determine whether the fighting truly ends.

The offensive also tests Syria’s changing foreign relationships. The SDF was a major American partner in the fight against ISIS, while al-Sharaa’s government has been seeking closer ties with Washington and European capitals as it pursues reconstruction and international recognition. Syria’s leadership is increasingly looking westward after decades of dependence on Russia and Iran under Assad, though foreign governments remain focused on protecting civilians and preventing ISIS detainees from escaping amid the upheaval. Damascus now controls far more of Syria than it did at the start of the month. Whether that produces a stable reunification depends on the ceasefire, the treatment of Kurdish communities, and the difficult work of combining former rivals into one government.

(The New Syrian Government now controls roughly 90% of Syria up from the roughly 60% controlled by the previous regime)`
      },
      {
        id: "s3-e3",
        title: "3. SpaceX Goes Public as Musk Becomes the World’s First Trillionaire",
        date: "June 12, 2026",
        summary: `SpaceX has begun trading on the public stock market in one of the largest offerings in history. Investors rushed to buy shares in the American rocket and satellite company, pushing its market value toward $2 trillion during its first day of trading. The surge has also carried founder Elon Musk’s estimated fortune past $1 trillion, making him the first person in history to reach the milestone. The offering brings billions of dollars of new capital to SpaceX and gives ordinary investors a way to own shares in a company central to commercial launches, satellite internet, and American space ambitions.

For the United States, it is a striking display of strength in its technology and space industries. Investors abroad are watching closely as governments and rival firms consider what a better funded SpaceX could mean for launch prices and the global satellite market. The milestone also sparks debate over the concentration of wealth and influence in a company whose work reaches from civilian communications to government space missions. Musk’s trillion-dollar status depends on the value of his shares and could change with the stock price, but today’s market debut marks a historic moment for both SpaceX and the world economy.`
      },
      {
        id: "s3-e4",
        title: "4. ARTEMIS III, AMERICA RETURNS TO THE MOON",
        date: "July 20, 2026 (57th Anniversary of Apollo 11)",
        summary: `On July 15, 2026, NASA’s Space Launch System departed Kennedy Space Center, carrying four astronauts aboard Orion. President Donald Trump, First Lady Melania Trump, NASA officials and thousands of spectators witnessed the historic launch. Commander Reid Wiseman, Pilot Victor Glover, Mission Specialist Christina Koch and Canadian astronaut Jeremy Hansen travelled to lunar orbit before meeting the SpaceX Starship lunar lander.

On July 20, exactly 57 years after Apollo 11, the lander touched down near the lunar south pole. Christina Koch became the first woman to walk on the Moon, declaring:
“Fifty-seven years ago, mankind first reached another world. Today, we return, carrying generations of dreams. For America and those who follow, we are home on the Moon again.”

Victor Glover subsequently became the first Black astronaut to walk on the lunar surface. Their achievement sparked celebrations nationwide, particularly as America had celebrated its 250th anniversary just sixteen days earlier. President Trump congratulated the crew, praising NASA, SpaceX and the Americans responsible for the mission.

Unlike Apollo 11, Artemis III will keep Koch and Glover on the Moon for approximately six days, gathering samples, investigating potential water-ice resources and testing equipment for future expeditions. The mission represents decades of investment by NASA, SpaceX, Axiom Space and American industry. Future Artemis missions aim to establish permanent lunar facilities, while preparations continue for a potential crewed Mars mission around 2030.

In 1969, America first reached the Moon. In 2026, it returned with ambitions extending beyond exploration towards a lasting human presence. Not just for the future of the United States but the future of Humanity.`
      },
      {
        id: "s3-e5",
        title: "5. Iran tests nuclear bomb",
        date: "2026",
        summary: `Following a massive explosion in the Iranian desert—initially the subject of speculation by news outlets—Western intelligence agencies such as the CIA have now officially confirmed that Iran has developed and tested a nuclear bomb and likely possesses others. With this test, Iran now possesses a nuclear deterrent, particularly against Israel and the United States, both of which also hold nuclear weapons. The United States may have missed its last opportunity to prevent this event.`
      },
      {
        id: "s3-e6",
        title: "6. BELARUS ATTACKS CHERNIHIV – NEW FRONT OPENED",
        date: "2026 / 2029",
        summary: `The ceasefire is a thing of the past, and the conflict has reached a new, dangerous stage: immediately following the expiration of the one-year truce between Kyiv and Moscow, the Belarusian army has actively entered the war on the side of Russia.

Without any prior public announcement, Belarusian tank and infantry units crossed the northern border in the early morning hours and launched a large-scale offensive against the strategically important city of Chernihiv.

The current situation on the ground:
• Chernihiv largely isolated: Belarusian troops have blocked the main access roads around the city and are attempting to cut Chernihiv off completely from the outside world.
• Bitter resistance: The Ukrainian garrison is holding its positions within the city. Heavy fighting, artillery fire, and drone attacks are reported from the outskirts. Both sides are already sustaining significant losses.
• Reinforcements for Kyiv blocked: The isolation of the city has pinned down the Ukrainian garrison stationed there. For the time being, these troops cannot be withdrawn to assist in the defense of the capital, Kyiv.`
      },
      {
        id: "s3-e7",
        title: "7. POLAND DECLARES WAR ON BELARUS!",
        date: "2029",
        summary: `In the early hours of the morning, the Polish government took decisive action. Following Belarus’s active participation—alongside the Russian Federation—in the offensive against Ukraine over the past few weeks, and its decision to make both its territory and its own troop contingents available for attacks on Ukrainian soil, Poland decided it was time to put a stop to it.

Without prior diplomatic consultations, without a meeting of the NATO Council, and without any ultimatum, Warsaw summoned the Belarusian ambassador, handed him a declaration of war, and simultaneously issued an order for its armed forces to invade.

Since Poland is acting as an active aggressor in this conflict and has initiated an offensive against a sovereign state (Belarus) on its own accord, NATO Article 5 (the collective defense clause) does NOT apply. In this war, Poland stands alone. Should Russian or Belarusian forces enter Polish territory as part of counter-offensives, this would legally be considered a consequence of Poland’s own aggression and would not trigger an automatic NATO defense response.

Due to the existing Union State between the Russian Federation and Belarus, as well as existing mutual assistance agreements, the Kremlin has immediately declared a state of war against Poland.`
      },
      {
        id: "s3-e8",
        title: "8. HISTORIC PEACE AGREEMENT REACHED — RUSSIA AND UKRAINE AGREE TO END WAR",
        date: "Washington, D.C. — February 2029",
        summary: `After years of devastating warfare, months of intense diplomatic negotiations, and countless failed attempts to secure a lasting settlement, the Russian Federation and Ukraine have formally agreed to the Washington Peace Accords of 2029, bringing an end to one of Europe’s deadliest conflicts in generations. The agreement, negotiated under the mediation of newly inaugurated President Marco Rubio, has been accepted by both Moscow and Kyiv, with Belarus also agreeing to its provisions.

Under the settlement, all parties will cease hostilities and begin withdrawing military forces according to an agreed timetable. Russia will withdraw from most occupied Ukrainian territory, while the agreement establishes new territorial arrangements concerning Luhansk and preserves the pre-2022 administration of Crimea. Neither Russia nor Ukraine will be required to formally recognize the other’s territorial claims. The treaty also establishes a 25-year nonaggression commitment, restrictions on Ukrainian membership in NATO and the European Union, the return of prisoners of war and displaced children, the release of civilian detainees, and the gradual restoration of economic relations. Belarus will completely withdraw its forces from Ukraine, while the United States will begin incrementally easing sanctions on Russia as the agreement is implemented. Neither side is required to declare defeat or acknowledge the other as victorious. Both governments have agreed that ending the conflict through a negotiated settlement is preferable to continued warfare.

Speaking from the White House, President Rubio welcomed the breakthrough:
“For years, this war has taken lives, destroyed communities, separated families, and threatened the peace of Europe. Today, Russia and Ukraine have agreed to put an end to that suffering. There are difficult compromises in this agreement, but peace requires the courage to choose a different future. The United States will work with all parties to ensure that these commitments are honored and that this war does not begin again.”

The agreement marks the first major diplomatic achievement of the Rubio administration, coming only weeks after the President assumed office. Military withdrawals, prisoner exchanges, humanitarian operations, and international verification are expected to begin immediately as the treaty enters its implementation phase. For the first time in years, Russia and Ukraine have agreed not merely to a temporary ceasefire, but to a comprehensive peace settlement intended to bring the war to a permanent end.`
      },
      {
        id: "s3-e9",
        title: "9. PEACE AGREEMENT REACHED: SERBIA AND BOSNIA AGREE TO END WAR AS YUGOSLAVIA DESCENDS INTO POLITICAL CRISIS",
        date: "March 2029, The Balkans",
        summary: `Following weeks of armed conflict, escalating international tensions, and fears of a wider military confrontation in southeastern Europe, Serbia and Bosnia and Herzegovina have reached a comprehensive peace agreement, formally bringing an end to their recent war. The breakthrough follows intensive diplomatic negotiations and significant international pressure, particularly from the United States under President Marco Rubio. With two American carrier strike groups positioned within striking distance and Washington establishing a no-fly zone over the conflict, the Yugoslav government ultimately accepted the proposed settlement, avoiding a potentially devastating confrontation with American and NATO forces.

Under the terms of the agreement:
— Military Withdrawal: Serbian forces will withdraw completely from Bosnian territory, bringing offensive operations to an end.
— War Reparations: Serbia agrees to approximately $10 billion in reparations to Bosnia and Herzegovina, intended to compensate for wartime destruction, infrastructure damage, and economic losses.
— Military Restrictions: Existing military restrictions imposed upon Bosnia will be lifted under the settlement.
— Territorial Recognition: Serbia will formally recognize Bosnia and Herzegovina’s sovereignty and territorial integrity, relinquishing claims to disputed Bosnian territory. No territorial referendum will be held.
— Foreign Military Withdrawal: Bosnia agrees to withdraw French, Saudi Arabian, and Greek military forces once its national armed forces have been sufficiently replenished and restored to operational readiness.
— Cessation of Hostilities: Both parties agree to end military operations and implement the terms of the peace settlement.

YUGOSLAVIA PLUNGES INTO POLITICAL TURMOIL
Despite the conclusion of hostilities, the agreement has triggered an unprecedented political crisis within Yugoslavia. Bakić has formally announced his resignation, following mounting domestic opposition to the peace settlement and widespread criticism of his government’s handling of the war. The resignation has created a significant leadership vacuum, with rival political factions competing for influence amid growing uncertainty over the country’s future. Across Serbia and other predominantly ethnic Serbian communities, mass demonstrations have erupted against the peace agreement, with tens of thousands taking to the streets to condemn the territorial concessions, financial reparations, and perceived humiliation of the nation.

PRESSURE ON KOSOVO COLLAPSES
The political upheaval and military consequences of the war have also substantially altered the regional balance of power. With Yugoslav forces withdrawing from Bosnia, the government facing massive domestic unrest, and its military resources strained by the recent conflict, Serbia’s ability to maintain political and military pressure on Kosovo has effectively collapsed.

INTERNATIONAL REACTIONS
The peace agreement marks another significant diplomatic achievement for U.S. President Marco Rubio, coming only months after the Washington Peace Accords ended the Russia–Ukraine War. However, while the international community has broadly welcomed the cessation of hostilities, considerable concern remains over Yugoslavia’s deteriorating domestic situation.`
      },
      {
        id: "s3-e10",
        title: "10. The Polish-Belarusian War has ended!",
        date: "January 2029",
        summary: `Following intensive, days-long negotiations mediated by the international community, the governments of the Republic of Poland and the Republic of Belarus signed a comprehensive agreement today to end all hostilities. This diplomatic breakthrough brings an end to one of the most dangerous geopolitical crises in Europe in recent decades.

Brief summary of events:
Triggered by the Belarusian incursion near Chernihiv, Poland launched an independent offensive into Belarusian territory on January 1, 2029, utilizing surprise air and ground strikes. However, the direct intervention of the Russian Federation, combined with massive counterattacks on Polish supply lines and air strikes against Warsaw, brought the advance to a halt within a few days. Faced with the prospect of devastating losses on both sides, the belligerents ultimately chose to head to the negotiating table.

The key points of the official peace treaty:
In accordance with the contractual agreements, all Polish armed forces are to withdraw completely from the occupied Belarusian territories and relocate to their home bases in Poland, while all land vehicles belonging to the Polish army must be transported back across the border within 48 hours. At the same time, a comprehensive humanitarian and material settlement has been established: all prisoners of war and internees from both sides are to be safely transferred to their respective home countries, and all captured military equipment and materiel must be fully accounted for and returned to the state of origin within 24 hours. To mitigate the civilian and structural consequences of the Polish offensive, Poland commits to paying a total of 8.2 billion US dollars to Belarus, to be used directly for the medical care of Belarusian civilians and the reconstruction of destroyed infrastructure.`
      },
      {
        id: "s3-e11",
        title: "11. BREAKING: WAR RETURNS TO THE KOREAN PENINSULA",
        date: "2029",
        summary: `The decades-old Korean armistice has collapsed into full-scale warfare. North Korean forces have crossed the Demilitarized Zone, launching an invasion of South Korea accompanied by missile attacks, mass artillery bombardments and special forces infiltrations. Explosions have rocked cities and military installations across the South. Thousands are dead, millions have fled their homes, and fierce fighting continues along the approaches to Seoul. The capital remains in South Korean hands, with the initial North Korean offensive stalled.

WASHINGTON ENTERS THE WAR
Following American air-and-missile strikes against North Korean military forces, President Marco Rubio addressed Congress and requested a formal declaration of war. Congress approved the declaration with overwhelming bipartisan support—the first American declaration of war since 1942. Washington has pledged to uphold its alliance with Seoul, with American and South Korean forces operating through their combined wartime command.

INTERNATIONAL POWERS INTERVENE
Australia has committed aircraft, warships and ground troops to defend South Korea. Britain has deployed two aircraft carriers and supporting vessels, conducting patrols and defensive operations. Japan is supporting American operations through access to its bases. China has independently entered the conflict against North Korea, launching airstrikes, imposing a naval blockade and assembling a massive ground force along the northern border. Russia has dispatched naval vessels to monitor the conflict but has not entered combat.

A PENINSULA AT WAR
North Korea has suffered severe losses up over 100k casualties but continues to occupy South Korean territory. Allied defenses have held at considerable cost, while China’s intervention threatens to open a second major ground front. Nearly eight decades after the guns fell silent in 1953, Korea is again at the center of an international war—and its outcome may reshape the balance of power across East Asia.`
      },
      {
        id: "s3-e12",
        title: "12. THE DAYS OF WRATH – NORTH KOREA ESCALATES TOWARD GLOBAL NUCLEAR WAR",
        date: "2029",
        summary: `Following a brutal, month-long war of attrition against South Korea and the surprise, large-scale incursion of Chinese troops into North Korea, the regime—under Supreme Leader Kim Yo Jong—has opted for the most ominous course of action imaginable. In a concerted move, North Korea has authorized a nuclear first strike against major international cities and military bases across the globe.

State media in Pyongyang proclaimed the move as the “final act of revolutionary self-defense against imperial and traitorous aggressors.” International early-warning systems sounded the alarm in the early morning hours as a total of 200 warheads were launched, triggering devastating detonations.

Based on official reports and impact assessments, the targets struck include:
• New York City: 2 detonations
• Las Vegas (Metro): 1 detonation
• Tel Aviv (metropolitan area): 2 detonations
• Frankfurt am Main: 1 detonation
• London: 1 detonation
• Volgograd: 1 detonation
• Seoul: 3 detonations
• Camp Humphreys (military base): 1 detonation
• Kunsan Air Base (military base): 1 detonation
• Beijing (Urban Core): 1 Detonation
• Shenyang (Urban Core): 1 Detonation
• Tokyo (23 wards): 1 detonation

The catastrophic detonations in the world’s population and power centers claim a historically unprecedented number of human lives:
• Civilians and military personnel killed: approximately 3,416,160 people
• Wounded and radiation-exposed: approx. 8,087,080 people
• Total number of casualties: Over 11 million individuals affected by this initial North Korean nuclear strike alone.`
      },
      {
        id: "s3-e13",
        title: "13. COUP IN THE PYONGYANG BUNKER – KIM YO-JONG OUSTED",
        date: "2029",
        summary: `Immediately following the global nuclear first strike, a historic and bloody transfer of power unfolds within the innermost command bunker of the North Korean regime in Pyongyang.

Even as the missiles were striking their targets, Supreme Leader Kim Yo-jong and the generals of the Supreme Command were summarily executed by units from the intelligence service (RGB) and the security forces. This abrupt coup took place because the hardliners, by triggering a global nuclear catastrophe, had placed the very existence of the Korean people in acute danger.

At the helm of the state stands the designated heir, Kim Seung-Ho—the previously reclusive son of Kim Jong-un, who received his education abroad. With the backing of modern-minded and pragmatic military cadres, he assumes the chairmanship of the State Secretariat for Affairs, as well as supreme command over the remaining forces of the Korean People’s Army (KPA), with the goal of steering the surviving nation through this unprecedented crisis.`
      },
      {
        id: "s3-e14",
        title: "14. PYONGYANG DECLARES UNILATERAL CEASEFIRE",
        date: "2029",
        summary: `Via unencrypted emergency frequencies, the new Supreme Leader, Kim Seung-Ho, has transmitted a historic emergency manifesto directly to the command posts, staff headquarters, and survivors of all warring parties (South Korea, the USA, China, Great Britain, and Australia):

"The perpetrators of Operation Winter are dead. They have been judged for their crimes against humanity and our people. We have taken control of the Republic's remaining capacities and bunker systems.

What happened is a tragedy like no other. But the complete destruction of the planet must end here. The Democratic People's Republic of Korea declares a unilateral ceasefire effective immediately.

Our troops cease fire on all fronts in the south and north and retreat to defensive positions. We offer all warring parties immediate entry into emergency peace negotiations. We open our borders to international humanitarian assistance, medical units and emergency teams to help civilians on all sides. Anyone who tries to continue storming the rubble of the Republic will encounter an insurmountable bunker doctrine. Anyone looking for peace will find a partner willing to negotiate in Pyongyang from this hour."

In the name of the Emergency Military Council for the Salvation of the Nation
Signed: Kim Seung-Ho`
      },
      {
        id: "s3-e15",
        title: "15. THE GLOBAL ECONOMIC SHOCK",
        date: "2029",
        summary: `Overview: Direct strikes physically destroy core metro zones, wiping out their output for Year 1. Elsewhere, the shock ripples through trade, finance, and market confidence — severe, but bounded by exposure.

Impact on Major Economies (Year 1 GDP Growth):
• United States: -15% (NYC financial core destroyed; Las Vegas struck; panic & wartime reallocation)
• PR China: -12.5% (Beijing & Shenyang struck; cushioned by size & diversification)
• Germany: -10% (Frankfurt/ECB struck; monetary disruption limited by federalism)
• Japan: -22.5% (Tokyo struck; Osaka & Nagoya absorb functions within weeks)
• India: -7.5% (IT/services disruption, capital flight, energy price pressure)
• United Kingdom: -25% (Greater London struck; financial role shifts to Paris/NYC)
• France: -10% (Eurozone contagion; Paris inherits displaced financial activity)
• Brazil: -7.5% (Softened commodity demand; cushioned by domestic economy)
• Italy: -11.25% (Debt-sensitive economy exposed to Eurozone banking shock)
• Canada: -12.5% (Deep exposure to US slowdown & cross-border supply chains)
• South Korea: -82.5% (Seoul struck 3x; deepest non-collapse contraction)
• Russia: -7.5% (Volgograd struck; shock added to existing sanction strains)
• Australia: -8.75% (Reduced export demand from China, Japan & South Korea)
• Mexico: -10% (US slowdown cuts USMCA manufacturing export demand)
• Spain: -10% (Eurozone contagion; tourism & financial confidence soften)
• Indonesia: -7.5% (Regional Asian trade disruption via CN, JP & KR)
• Saudi Arabia: -5% (Oil demand softens, offset by regional crude risk premium)
• Netherlands: -12.5% (Rotterdam throughput hit by German industrial shock)
• Turkey: -10% (Currency volatility & trade route disruption)
• Switzerland: -7.5% (London/Frankfurt shock offset by safe-haven capital inflows)
• Israel: -95% (Tel Aviv/Gush Dan struck twice; tech & finance hit hard)

Regional Averages:
• Europe: -12.5%
• Asia: -27.5% (Excluding South Korea: -12.5%)
• Middle East: -27.5% (Excluding Israel: -7.5%)
• South America: -7.5%
• Africa: -3.75% (Lowest direct trade & financial integration)`
      },
      {
        id: "s3-e16",
        title: "16. THE SMALLPOX EMERGENCY",
        date: "2029",
        summary: `Overview: On Day 34, North Korean units release weaponized smallpox at Munsan and Dandong: 100 exposures confirmed, 2,900 real. China acts immediately under Operation Shield; all other governments respond on Day 65. By Day 94, the outbreak reaches 15,995 cases and 2,809 deaths across 24 countries, led by Russia and Australia. Russia, Australia, the United States, and North Korea remain active or growing.

Impact on Major Nations (Day 94 Cases / Deaths):
• United States: 1,500 / 240 (4 seeds; stay-home order, no vaccination or tracing; stadium shelters & unrestricted air travel fuel spread; still growing)
• PR China: 1,900 / 410 (Ring vaccination of 5.6M, 61,000 quarantined; northeastern hospitals overwhelmed; slowly declining)
• Germany: 45 / 6 (Imports via Eurasian air links; contained by tracing)
• Japan: 140 / 22 (Evacuation hub near the war; Tokyo hospitals strained; slowly declining)
• India: 10 / 2 (Air & sea closure; field hospital cluster of 5; contained)
• United Kingdom: 60 / 8 (Imports via London air links; London health system strained)
• France: 38 / 5 (Imports via Paris; contained by tracing)
• Brazil: 9 / 1 (Few imports; distance limits spread)
• Italy: 22 / 3 (Imports via Milan & Rome; contained)
• Canada: 70 / 9 (US cross-border spread & evacuee arrivals)
• South Korea: 111 / 14 (Exposure caught within hours; no new cases since Day 86; contained)
• Russia: 6,200 / 1,150 (90 seeds; border measures only; vaccine reserve exhausted by Day 86; Far East hospitals overloaded; still growing)
• Australia: 4,100 / 560 (35 seeds from mass evacuation; airport plan, no vaccination or tracing; still growing)
• Mexico: 26 / 3 (US spread across the border; limited testing)
• Spain: 18 / 2 (Tourism links; contained)
• Indonesia: 55 / 8 (Regional trade & travel links; weak surveillance)
• Pakistan: 9 / 2 (2 seeds from China trade routes; evening curfews; active, not growing)
• Saudi Arabia: 12 / 2 (Pilgrim & worker travel links; contained)
• Netherlands: 15 / 2 (Rotterdam shipping crews; contained)
• Turkey: 24 / 4 (Land & air transit hub; weak border control)
• Switzerland: 7 / 1 (Few imports; strong health system)
• Israel: 30 / 5 (Imports via Tel Aviv; strained by prior strikes)

Regional Averages (Cases / Deaths per Country):
• Europe: 801 / 147
• Asia: 545 / 115 (Excluding North Korea: 371 / 76)
• Middle East: 17 / 3
• South America: 9 / 1
• Africa: 3 / 0 (Lowest exposure)`
      }
    ],
    minorEvents: []
  },
  {
    id: "season-2",
    number: 2,
    year: "2025",
    type: "Semi Custom",
    isLive: false,
    tagline: "The tipping point — Geopolitical shifts and localized conflicts.",
    description: "Season 2 operated on a semi-custom baseline setting in 2025, marked by critical European flashpoints and regional instability.",
    majorWars: [
      {
        id: "s2-w1",
        title: "Russia-Ukraine War",
        belligerentsText: "No record"
      },
      {
        id: "s2-w2",
        title: "Serbian Civil War",
        belligerentsText: "No record"
      }
    ],
    majorEvents: [
      {
        id: "s2-e1",
        title: "1. Houthi Missile Strikes",
        date: "2025",
        summary: `The United Arab Emirates and Saudi Arabia have reported waves of missile and drone attacks against its territories by the Houthis, The group claims that these attacks occurred due to the saudi and emirati involvement in the Yemen civil war, The group also claims saudi and UAE air strikes targetting water pipelines and civillian infrastructure.

Although most of the drones and missiles approaching were intercepted, According to Emirati and Saudi authorities several drones and dozens of missiles were reported to be intercepted before reaching their assumed destination, Both Saudi and Emirati authorities ensures the citizens that everything is fine and to follow emergency procedures.

However the damage is confirmed with King Khalid Airport in riyadh being struck, The runway has been damaged and considered un operational until repaired, Safaniya, Qatif and Khurais oil fields were also struck with damages inflicted, The UAE reports that Burj Khalifa was attempted to be struck however the UAE defence systems managed to intercept incoming Houthi missiles but a synagogue in abu dhabi has been struck by drones with damage to the facility and books.

Very few reported casualties with 1 confirmed kill in a UAE air force cadet school and 1 israeli citizen died to her wounds in a synagogue that had been targeted, The Saudi authorities claim that the Houthi's special forces kidnapped 3 saudi soldiers in the saudi-yemen border through a cross border raid.`
      },
      {
        id: "s2-e2",
        title: "2. Let the Races begin",
        date: "2025",
        summary: `Speaking before the nation in Beijing President Xi Jinping has announced the beginning of a new era for the Chinese space programme. Standing alongside representatives of the CNSA Chinese scientists engineers and astronauts Xi declared that China would establish a permanent human presence on the Moon before the end of 2030.

"For thousands of years the Chinese people have looked toward the Moon. Today we no longer look toward it only through stories and dreams. We possess the knowledge the industry and the determination to reach it."

Xi announced that China would begin one of the largest scientific projects in the history of the People's Republic. New rockets spacecraft lunar landers research stations and surface infrastructure will be developed with Chinese industry mobilised behind the programme.

"Before 2030 the Five Star Red Flag will fly above a permanent Chinese base on the Moon. Chinese astronauts will live there Chinese scientists will conduct research there and Chinese technology will build the foundations for generations that follow."`
      },
      {
        id: "s2-e3",
        title: "3. April 21, 2025 — Pope Francis Dies",
        date: "April 21, 2025",
        summary: `The Vatican has announced that Pope Francis died this morning at age 88, one day after appearing before the faithful on Easter Sunday. Bells ring across Rome as mourners gather in St. Peter’s Square, while leaders around the world send condolences.

His death leaves the papacy vacant. The Catholic Church now begins its period of mourning and preparations for a conclave to elect his successor. For nations with large Catholic populations, the news is likely to bring public vigils, church services, and official tributes in the days ahead.`
      },
      {
        id: "s2-e4",
        title: "4. Vatican City | May 15, 2025 — Pope Benedict XVII Elected",
        date: "May 15, 2025",
        summary: `White smoke rose over the Sistine Chapel this evening after five ballots, announcing the election of Cardinal Robert Sarah of Guinea. He has taken the name Benedict XVII, a choice widely understood as a tribute to Benedict XVI and a signal of renewed emphasis on Catholic tradition. Although the Church had popes from North Africa in its early centuries, Benedict XVII is its first pope from sub-Saharan Africa and first Black pope.

The election signals a decisive turn toward traditional Catholic worship and a more forceful defense of Christian teaching. The new pontiff is expected to pull back from the more liberal approach associated with Francis, particularly on LGBTQ-related pastoral initiatives, and place renewed emphasis on traditional Catholic doctrine. In his first address, Benedict warned that the Church must not dilute its faith in the name of interreligious harmony. “Islam presents a real challenge to Christianity,” he declared. “We must speak plainly about that challenge, and even more plainly against those who use religion to terrorize Christians. The Church will stand with the persecuted and proclaim Christ without fear.”

His words carry particular weight in parts of Africa where Islamist armed groups have attacked churches and Christian communities, alongside other civilians. Observers see those conflicts as one reason the cardinals may have turned to a Guinean leader willing to speak about persecution so directly. Governments and religious leaders now await the first decisions of a papacy expected to reshape the Vatican’s priorities.`
      },
      {
        id: "s2-e5",
        title: "5. Nepal | September 12, 2025 — The Gen Z Uprising",
        date: "September 12, 2025",
        summary: `What began as a protest against Nepal’s social media ban has brought down the government. Young demonstrators, already furious over corruption, unemployment, and the privileged lives of politicians’ children, filled the streets on September 8. After security forces opened fire and killed at least 19 people, the protests grew into a nationwide revolt.

The government lifted the ban, but the anger did not subside. Protesters set Parliament and other government buildings ablaze, and Prime Minister K. P. Sharma Oli resigned on September 9. Soldiers moved into Kathmandu that night as Nepal faced a crisis over who would govern next. The upheaval has been dubbed the “Gen Z coup,” though it was a youth-led uprising rather than a military takeover.

Following talks over a transitional government, former chief justice Sushila Karki has been appointed interim prime minister, becoming the first woman to lead Nepal. Her government now faces the demands that toppled Oli: accountability for the deaths, action against corruption, and a credible path to new elections.`
      },
      {
        id: "s2-e6",
        title: "6. A Shake in the Desert",
        date: "December 12th, 2025",
        summary: `News Stations switch on across the world in the early morning to deliver the following message internationally:

Breaking News, Following confirmed reports from Iranian State Media in Tehran last night, we can now tell you that the Islamic State of Iran has officially developed and tested Nuclear Weapons. This brings the official number of nuclear armed states to 8. The only details gathered of the Nuclear weapons is its 30 Kiloton yield. Governments across the world have been set on high alert following this development.

The President of Iran, Masoud Pezeshkian has addressed the Islamic State of Iran declaring to the nation and the world that their Newly developed Nuclear Weapons are for deterrence only and that 'Iran has no intention of using nuclear weapons except in response to an existential threat against the country'.

It is believed that in precautions the Iranian government has put its military on high alert. Tehran has also confirmed that 'any attempt to destroy [Iranian] Nuclear capability... would now carry a risk of escalation'.

The Global order has shifted, With an Iran possessing Weapons of Mass Destruction, the threat of War in the Middle East increases yet again.`
      },
      {
        id: "s2-e7",
        title: "7. The American Market Shakes",
        date: "2025",
        summary: `China has officially halted all rare earth exports to the United States and Japan, citing their relations with the 'rogue KMT government' and previous American tariffs.

Markets have reacted immediately, with manufacturers worldwide warning of shortages, factory slowdowns and rising production costs leading to Inflation with many layoffs in the US and Japan causing unemployment to sky rocket, and cost of living to go up.

The USA and Japan are to be hit hardest, particularly across automotive, electronics, aerospace and defence. Whilst almost every nation on the planet faces second hand disruptions due to collapsing US markets. Other nations such as Russia and South Africa are expecting increased profits as private companies turn to source rare earth exports from other locations. Nations such as Brazil have offered to the USA and other affected states to begin exporting Rare Earth Materials at a slight discount if investments are made to extract said Recourses.

This move from China has also damaged them as they lose income from a export that provides Billions every year.

GDP impact over the next 5 years:
USA –6.2% | Japan −4.8% | China –2.7% | Germany −1.2% | South Korea −1.2% | France −0.7% | Italy −0.7% | UK −0.7% | Canada −0.5% | Taiwan −1.0% | India −0.6% | Russia +0.2% | South Africa +0.1% | Iran –0.0%`
      },
      {
        id: "s2-e8",
        title: "8. Chooz Meltdown",
        date: "June 15th 2029",
        summary: `11:23 — "We interrupt your broadcast to bring you the following breaking news. Good Morning, you are listening to France 24. We interrupt your broadcast to bring you breaking news in Chooz where there is an ongoing incident at the Chooz Nuclear Power Plant. Unconfirmed reports from staff indicate that cooling rods within the Reactor failed to lower, leading to an exponential temperature rise. We are on the verge of a full Meltdown."

17:44 — "Good Evening, emergency medical tents have been set up. Firefighters, workers, local residents and police are being treated. We can now confirm that Radiation is leaking from the plant. We urge everyone in the nearby area to stay indoors and evacuate if ordered. With the Reactor sitting next to the Meuse River, hundreds of dead fish have been observed."

20:23 — "We can confirm a death toll of 9 people and 1 child due to intense radiation sickness. If you are located within 50km of the Chooz Power Plant and experience Severe Nausea, Vomiting, Diarrhea, Severe Headaches, or Fatigue, seek immediate medical attention. More towns are being evacuated across France and Belgium."`
      },
      {
        id: "s2-e9",
        title: "9. The Serbian Civil War",
        date: "February 2026",
        summary: `After the collapse of the Serbian Economy, the Government did little to fix it and instead focused on oppressing dissent through state controlled media. The Government response of deploying the Peoples National Army to suppress riots about lost pensions, wages and jobs turned deadly when shots were fired, resulting in 79 deaths. Martial Law was met with outright refusal from soldiers and civilians. Fighting broke out across Belgrade.

A Serbian General, Zoran Nasković on the 16th of February, 2026 gathered loyalties of officers across the nation and was endorsed by politicians and multiple political organizations. Within hours, Nasković's army seized many cities across Serbia, being met with open arms by the population. On the 20th of February, Novi Sad was designated the Main Operations Base of the Serbian Peoples Army, acting as a Capital city for rebel forces.

Belgrade stands as a hotbed of conflict between civilians and paramilitary, with Loyalist morale at an all time low. The Serbian Civil War has Officially Begun.`
      },
      {
        id: "s2-e10",
        title: "10. Deadly Industrial Explosion",
        date: "Ningbo, China",
        summary: `In the early afternoon, a massive explosion struck an industrial area near the waterfront in the Chinese city of Ningbo, sending a powerful shockwave across surrounding districts and damaging buildings several kilometres from the blast site. The explosion occurred shortly after 14:30 local time at a large chemical storage facility located within an industrial port zone.

Witnesses reported hearing a series of loud explosions followed by a large fireball and a column of dark smoke rising above the city. The effects were seen as far as Shanghai, with vibrations felt in Yancheng.

Chinese emergency authorities confirmed 37 deaths and more than 180 injuries, with 15 people in critical condition. The Ningbo Jufeng and Xinfu Chemical Tech storage facilities were completely destroyed. Rail services and port exports were temporarily halted.`
      },
      {
        id: "s2-e11",
        title: "11. UAE Announces Withdrawal from OPEC",
        date: "May 1",
        summary: `The United Arab Emirates has announced that it will leave OPEC and OPEC+ on May 1, ending nearly six decades of membership. Abu Dhabi says it wants greater control over its own production as it plans for future energy demand.

The departure removes one of OPEC’s largest producers from its quota system and exposes a widening divide between the UAE and Saudi Arabia over who should set the pace of Gulf oil production. Oil prices have eased as traders anticipate additional Emirati supply. Asian refiners in Japan, China, India, and South Korea may gain access to competitively priced Gulf cargoes, putting downward pressure on Brent and U.S. crude prices.`
      },
      {
        id: "s2-e12",
        title: "12. Japan | The Kumamoto Earthquake",
        date: "July 28, 2026",
        summary: `A powerful earthquake has struck Kumamoto Prefecture on Japan’s southern island of Kyushu, measured at magnitude 6.8 by USGS and 7.1 by Japanese authorities. The quake brought down buildings, damaged roads and bridges, and disrupted power, water, rail, and air travel.

Authorities report 38 dead and roughly 370 injured. An estimated 72,000 homes sustained damage, including more than 2,300 destroyed. Insurers expect property claims of approximately $1.4–2.1 billion. Regional manufacturing and transport faced temporary factory closures as nationwide rebuilding efforts began.`
      }
    ],
    minorEvents: []
  },
  {
    id: "season-1",
    number: 1,
    year: "2026",
    type: "Custom",
    isLive: false,
    tagline: "The origin season — A custom geopolitical playground.",
    description: "Season 1 was Brand New World's inaugural season, featuring custom nations, revised borders, and grand-scale player warfare.",
    majorWars: [
      {
        id: "s1-w1",
        title: "US Civil War",
        belligerentsText: "No record"
      },
      {
        id: "s1-w2",
        title: "Russian Civil War",
        belligerentsText: "No record"
      },
      {
        id: "s1-w3",
        title: "Second Falklands War",
        belligerentsText: "No record"
      }
    ],
    majorEvents: [
      {
        id: "s1-e1",
        title: "1. Britain: An Empire Reborn",
        date: "Season 1",
        summary: `On the evening of the Prime Minister's address, television and radio broadcasts across the United Kingdom are interrupted by a statement from Downing Street. Nigel Farage appears before the national press and announces that Britain will no longer accept the Argentine occupation of the Falkland Islands. He declares the seizure illegal, promises the liberation of the island population, and confirms that the Royal Navy has been ordered to assemble for military operations in the South Atlantic.

The language of the address quickly attracts international attention. Farage warns that all Argentine military vessels are now considered legitimate British military targets regardless of whether they are operating around the Falklands, and openly threatens wider destruction should Argentina resist. Within hours, the speech dominates international broadcasting and diplomatic communications as governments attempt to determine whether London intends a limited operation to retake the islands or a broader war against Argentina itself.

At British naval facilities, preparations already underway become visible. Royal Navy warships begin departing port while fleet auxiliaries load fuel, ammunition and supplies for extended operations. Aircraft, helicopters and maritime patrol assets are placed on heightened readiness as Britain begins assembling the logistical network necessary to sustain a task force thousands of kilometres from home. Military leave is restricted in several formations and elements of the Royal Marines are ordered to prepare for possible amphibious operations.

Argentina receives the address as an ultimatum. Argentine forces in and around the islands are placed on increased readiness while naval and air units begin preparing for the possibility of British strikes beyond the immediate Falklands theatre. Across the Atlantic, commercial shipping begins reconsidering routes near the expected combat zone as insurers react to the declaration that Argentine military vessels may be attacked wherever encountered.

By the following morning there is little ambiguity about Britain's intentions. For the first time since Argentina seized the islands during Britain's internal crisis, a substantial British force is moving south and nothing may stop his majesty's fleet.`
      },
      {
        id: "s1-e2",
        title: "2. Texas Votes to Rejoin the Constitutional States",
        date: "Season 1",
        summary: `Polling stations across Texas opened early as millions of voters participated in the long anticipated referendum on whether the Lone Star Republic should remain independent or reunify with the Constitutional States. The campaign had dominated Texan politics for months, with reunification supporters focusing heavily on economic integration, access to the larger Constitutional market, national defence and the restoration of political ties with neighbouring American territory. The independence campaign instead argued that Texas had successfully established its own institutions and should not surrender the sovereignty gained during the American collapse.

Turnout reached 78 percent, with particularly heavy participation around Dallas Fort Worth, Houston, Austin, San Antonio and the state's northern counties. Election authorities reported scattered disputes and lengthy queues but no irregularities substantial enough to threaten the legitimacy of the result. Domestic observers and representatives from both campaigns monitored the count as results were transmitted throughout the evening.

Referendum Result:
• Rejoin the Constitutional States: 62%
• Remain an Independent Lone Star Republic: 38%

Following certification of the vote, the Lone Star government formally acknowledges the result and begins the constitutional process required for Texas to reenter the Constitutional States. Celebrations take place across several major cities as reunification supporters gather outside government buildings and display Texan and Constitutional flags.`
      },
      {
        id: "s1-e3",
        title: "3. Britain Retakes the Falklands",
        date: "Season 1",
        summary: `Argentina's campaign in the Falkland Islands has ended in defeat. Remaining Argentine forces have been ordered to surrender after British operations destroyed their ability to maintain a viable foothold on the islands and effectively severed the supply routes connecting the garrison with the Argentine mainland.

British forces have regained effective control of the Falklands as Argentine troops assemble at designated locations to surrender their weapons, vehicles and remaining military equipment. Argentine naval and air forces have also been ordered to cease offensive operations around the islands, bringing organized fighting in the South Atlantic to an end.

The victory is celebrated across Britain, where returning the islands becomes one of the largest demonstrations of national unity since the beginning of the global crisis. Prime Minister Nigel Farage addresses the country following confirmation of the surrender, declaring that British sovereignty over the islands has been restored and that the Falklands will remain British.

In Argentina, the defeat produces the opposite reaction. Demonstrations begin in Buenos Aires and other major cities as the public demands answers over the failed operation, military losses and the decision to continue fighting after British forces had isolated the islands.`
      },
      {
        id: "s1-e4",
        title: "4. The Constitutional Government loses the Canal Mandate!",
        date: "Season 1",
        summary: `In shocking news this evening following a press reveal from Donald Trump's secretary Caroline Leavitt, the Central American Republic in tandem with the Cascadian Republic have signed a shocking declaration blocking constitutionalist access to the Panama canal.

President Trump, head of state of the constitutional government, went on Twitter to share his thoughts on the hostile maneuver.

Experts estimate that the Blockade can impact the Midwestern based government's access to consumer and military electronics and chips which are critical to the US War effort, potentially tanking production output down to only 50% given the California government's refusal to engage in trade with the Midwestern government. Other effects of the canal Blockade include the reduction of total import volume by 20%, a 90% increase in prices for foodstuffs and consumer goods (rice, canned goods, fruits, vegetables, sugar, appliances), with overall household costs increasing by 20% for the average American.

More immediate effects include a 10% dip in the S&P 500 as well as estimated 1% GDP contraction alongside a 1.7% increase in unemployment. Experts warn that if this continues, a total recession could take hold.`
      },
      {
        id: "s1-e5",
        title: "5. Death of King Charles III",
        date: "February 4, 2028",
        summary: `News Channels across the world interrupt their regularly scheduled Broadcasts at the light of new breaking News. The first to do so is GB News:

"We apologise for the interruption to your broadcasting to bring you some Breaking News. Good Evening, On Today, the 4th of February 2028 we can announce the Death of His Majesty, King of Great Britain, Charles III. The nation is now to go into a period of mourning as we remember King Charles III."

It is reported that the King passed away peacefully in his sleep after suffering organ failure as a result of his previously diagnosed illness. Prince William ascends as the new monarch, reigning under the name King William V.

King William released an official statement on behalf of the royal family:
"The loss of my Father is one of the biggest losses in our history. When I first lost my mother over 30 years ago, I wasn't sure how I'd cope, I was just a child who dealt with a loss greater than any, but there was a man who was always there for me. My father, who was a great man who was respected worldwide as a diplomat, a leader and a family man. His death is a personal loss to me and to the nation, but he would want us to stand strong, stand together and keep moving forward. And that's what we will do, as this nation has done for thousands of years."`
      }
    ],
    minorEvents: []
  }
];

