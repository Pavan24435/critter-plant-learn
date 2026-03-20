// Global map of key point terms to their descriptions
export const keyPointDescriptions: Record<string, string> = {
  // BOTANY - Plant Anatomy
  "Root system structure": "The root system anchors plants and absorbs water/minerals. It includes the epidermis, cortex, endodermis with Casparian strip, pericycle, and vascular cylinder. Tap roots (dicots) have one main root; fibrous roots (monocots) have many equal roots.",
  "Stem anatomy": "The stem supports leaves and flowers, transporting water and nutrients. It contains the epidermis, cortex, vascular bundles (xylem and phloem), and pith. Monocots have scattered vascular bundles; dicots have them arranged in a ring.",
  "Leaf structure": "Leaves are the primary photosynthetic organs. They consist of the epidermis (upper and lower), mesophyll (palisade and spongy), and vascular bundles (veins). Stomata on the surface regulate gas exchange.",
  "Vascular tissues": "Xylem transports water and minerals upward (dead cells: tracheids and vessels). Phloem transports organic food bidirectionally (living cells: sieve tubes and companion cells). Together they form the plant's transport system.",
  "Meristematic tissues": "Undifferentiated cells that divide continuously. Apical meristems (root/shoot tips) cause primary growth in length. Lateral meristems (vascular/cork cambium) cause secondary growth in girth. Intercalary meristems are found at leaf bases.",

  // Photosynthesis
  "Light reactions": "Occur in thylakoid membranes of chloroplasts. Light energy is absorbed by chlorophyll, splitting water (photolysis) into O₂, H⁺, and electrons. The electron transport chain generates ATP (photophosphorylation) and NADPH for the Calvin cycle.",
  "Calvin Cycle": "The light-independent reactions occurring in the stroma. CO₂ is fixed by RuBisCO into 3-PGA, reduced to G3P using ATP and NADPH, then RuBP is regenerated. Three turns produce one G3P molecule; six turns make one glucose.",
  "Chloroplast structure": "Double-membrane organelle with outer membrane, inner membrane, thylakoid system (grana stacks connected by stroma lamellae), and stroma (fluid matrix). Contains its own circular DNA and 70S ribosomes.",
  "Pigments": "Chlorophyll a (blue-green, primary pigment), chlorophyll b (yellow-green, accessory), carotenoids (yellow-orange, photoprotective), and xanthophylls. They form antenna complexes to capture different wavelengths of light.",
  "C3, C4, CAM plants": "C3 plants (rice, wheat) fix CO₂ directly via RuBisCO. C4 plants (maize, sugarcane) use PEP carboxylase first, avoiding photorespiration. CAM plants (cacti) open stomata at night to conserve water in arid conditions.",

  // Plant Respiration
  "Glycolysis": "Occurs in the cytoplasm. One glucose molecule (6C) is split into two pyruvate molecules (3C), producing a net gain of 2 ATP and 2 NADH. It does not require oxygen and is common to both aerobic and anaerobic respiration.",
  "Krebs Cycle": "Occurs in the mitochondrial matrix. Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C). Each turn produces 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂. Two turns per glucose molecule.",
  "Electron Transport Chain": "Located on the inner mitochondrial membrane. NADH and FADH₂ donate electrons to a series of carriers, creating a proton gradient. ATP synthase uses this gradient to produce ~34 ATP per glucose (chemiosmosis).",
  "ATP production": "Total ATP yield per glucose: ~36-38 ATP. Glycolysis = 2 ATP, Krebs Cycle = 2 ATP, ETC = ~34 ATP. ATP (adenosine triphosphate) is the universal energy currency of cells.",
  "Aerobic vs Anaerobic": "Aerobic respiration requires O₂ and produces 36-38 ATP with CO₂ and H₂O as byproducts. Anaerobic respiration (fermentation) produces only 2 ATP with ethanol + CO₂ (yeast) or lactic acid (muscles) as byproducts.",

  // Transpiration
  "Stomatal mechanism": "Guard cells control stomatal opening/closing. When K⁺ ions enter guard cells, water follows by osmosis, making them turgid and opening the pore. In drought, ABA triggers K⁺ efflux, causing closure to prevent water loss.",
  "Transpiration pull": "As water evaporates from leaf mesophyll cells through stomata, it creates a negative pressure (tension) that pulls water upward through the xylem from roots. This is the main driving force for water ascent in tall trees.",
  "Cohesion-tension theory": "Explains water ascent in plants. Transpiration creates tension (negative pressure) at the top. Cohesion (hydrogen bonds between water molecules) maintains a continuous water column. Adhesion keeps water attached to xylem walls.",
  "Factors affecting transpiration": "Temperature (↑ increases rate), humidity (↑ decreases rate), wind speed (↑ increases rate), light intensity (↑ opens stomata), and soil water availability. Anti-transpirants like ABA reduce water loss.",
  "Guttation": "Loss of liquid water from leaf margins through hydathodes (specialized pores) when root pressure exceeds transpiration rate, typically seen at night or in humid conditions. Unlike transpiration, guttation involves xylem sap with dissolved minerals.",

  // Mineral Nutrition
  "Essential elements": "17 elements required for plant growth: C, H, O (from air/water) and 14 mineral elements. An element is essential if the plant cannot complete its life cycle without it (Arnon's criteria). Discovered through hydroponics experiments.",
  "Macro vs micronutrients": "Macronutrients (>10 mmol/kg): N, P, K, Ca, Mg, S — needed for structural and metabolic roles. Micronutrients (<10 mmol/kg): Fe, Mn, Zn, Cu, Mo, B, Cl, Ni — needed as enzyme cofactors and in electron transport.",
  "Nitrogen fixation": "Conversion of atmospheric N₂ to NH₃ by biological (Rhizobium in legume root nodules, free-living Azotobacter) or industrial (Haber process) means. Nitrogenase enzyme requires anaerobic conditions and high ATP.",
  "Deficiency symptoms": "Mobile nutrients (N, P, K, Mg) show symptoms in older leaves first as they are translocated to growing regions. Immobile nutrients (Ca, Fe, S) show symptoms in younger leaves. Chlorosis, necrosis, stunting, and die-back are common signs.",
  "Hydroponics": "Growing plants in nutrient solutions without soil, used to determine essential mineral elements. Julius von Sachs pioneered this technique. Modern hydroponics is used commercially for tomatoes, lettuce, and herbs.",

  // Plant Hormones
  "Auxins": "Produced in shoot tips, auxins (IAA) promote cell elongation, phototropism, apical dominance, and root initiation. They move basipetally (from tip to base). Used commercially in rooting powder and as herbicides (2,4-D).",
  "Gibberellins": "Promote stem elongation, seed germination (by inducing α-amylase), flowering in long-day plants, and parthenocarpy (seedless fruits). GA₃ is the most studied. Discovered from the fungus Gibberella fujikuroi causing 'foolish seedling disease'.",
  "Cytokinins": "Promote cell division (cytokinesis), shoot initiation in tissue culture, delay leaf senescence, and promote lateral bud growth (counteracting apical dominance). Zeatin was the first natural cytokinin discovered from maize.",
  "ABA": "Abscisic acid is the 'stress hormone.' It induces stomatal closure during drought, promotes seed dormancy, and inhibits growth. It counteracts the growth-promoting effects of gibberellins and auxins during stress conditions.",
  "Ethylene": "The only gaseous plant hormone. Promotes fruit ripening, leaf abscission (falling), senescence, and the triple response in seedlings. Used commercially to ripen bananas and tomatoes. Produced from methionine via ACC synthase.",

  // Plant Reproduction
  "Flower structure": "The flower has four whorls: calyx (sepals, protection), corolla (petals, attract pollinators), androecium (stamens = filament + anther, male), and gynoecium (pistil = stigma + style + ovary, female). Complete flowers have all four whorls.",
  "Pollination": "Transfer of pollen from anther to stigma. Self-pollination (same flower or plant) ensures reproduction but reduces genetic variation. Cross-pollination (different plants) increases variation. Agents: wind (anemophily), insects (entomophily), water (hydrophily).",
  "Double fertilization": "Unique to angiosperms. One sperm fuses with the egg cell → zygote (2n), and the second sperm fuses with two polar nuclei → primary endosperm nucleus (3n). Discovered by S.G. Nawaschin in 1898. Ensures endosperm develops only when embryo forms.",
  "Seed formation": "After fertilization, the ovule develops into a seed. The zygote becomes the embryo (with radicle, plumule, and cotyledons), the endosperm stores food, and the integuments become the seed coat (testa). The ovary wall becomes the fruit.",
  "Vegetative propagation": "Asexual reproduction through vegetative parts: stems (runners in strawberry, rhizomes in ginger, tubers in potato), leaves (Bryophyllum), and roots (sweet potato). Produces genetically identical clones. Used in horticulture for rapid multiplication.",

  // Plant Genetics
  "Mendel's Laws": "Law of Dominance: one allele dominates the other. Law of Segregation: allele pairs separate during gamete formation. Law of Independent Assortment: genes on different chromosomes segregate independently. Based on monohybrid and dihybrid crosses with pea plants.",
  "Polyploidy": "Having more than two sets of chromosomes (e.g., triploid 3n, tetraploid 4n). Common in plants — wheat is hexaploid (6n). Polyploids are often larger, more vigorous, and produce bigger fruits. Can arise from colchicine treatment or hybridization.",
  "Gene mapping": "Determining the relative positions of genes on chromosomes using recombination frequencies. 1% recombination = 1 centiMorgan (cM). Closer genes show less recombination (linkage). Modern techniques include RFLP, SSR, and SNP markers.",
  "Plant breeding": "Systematic improvement of crop plants through selection, hybridization, and modern techniques. Steps: collection of variability → evaluation → hybridization → selection → testing → release. Examples: IR-8 rice, Sonalika wheat (Green Revolution).",
  "Genetic engineering": "Introduction of foreign genes into plants using Agrobacterium tumefaciens (natural gene transfer agent) or gene gun (biolistics). Creates transgenic plants with desired traits like pest resistance, herbicide tolerance, and improved nutrition.",

  // Plant Ecology
  "Succession": "Sequential change in plant communities over time. Primary succession starts on bare rock (lichens → mosses → herbs → shrubs → trees). Secondary succession occurs after disturbance (fire, flood). Ends in a stable climax community.",
  "Biomes": "Large-scale ecosystems determined by climate: tropical rainforest, temperate deciduous forest, taiga (boreal), tundra, grassland, desert, and aquatic biomes. Each has characteristic flora and fauna adapted to its conditions.",
  "Adaptations": "Structural, physiological, and behavioral modifications for survival. Xerophytes (thick cuticle, sunken stomata), hydrophytes (aerenchyma), halophytes (salt glands), epiphytes (aerial roots). Adaptations evolve through natural selection.",
  "Competition": "Interaction where organisms compete for the same limited resources (light, water, nutrients, space). Intraspecific (within species) is more intense than interspecific (between species). Competitive exclusion principle: two species cannot occupy the same niche.",
  "Symbiosis": "Close, long-term interaction between different species. Mutualism (both benefit: mycorrhizae), commensalism (one benefits, other unaffected: epiphytes on trees), parasitism (one benefits, other harmed: Cuscuta on host plants).",

  // Plant Tissue System
  "Dermal tissue": "The outer protective covering of the plant. Primary dermal tissue is the epidermis (single layer with cuticle). Secondary dermal tissue is periderm (bark) with cork cells. Contains guard cells, trichomes, and root hairs.",
  "Vascular tissue": "Transport system of the plant. Xylem (dead cells: tracheids and vessel elements) transports water and minerals upward. Phloem (living cells: sieve tube elements and companion cells) transports organic nutrients bidirectionally.",
  "Ground tissue": "Makes up the bulk of the plant body. Three types: parenchyma (thin-walled, storage, photosynthesis), collenchyma (thickened corners, flexible support), sclerenchyma (lignified walls, rigid support — fibers and sclereids).",
  "Cell types": "Plants have diverse cell types: parenchyma (most common, versatile), collenchyma (support in growing organs), sclerenchyma (rigid support), tracheids/vessels (water transport), sieve tubes (food transport), and guard cells (gas exchange).",
  "Tissue organization": "Plant tissues are organized into three systems: dermal (protection), vascular (transport), and ground (support and storage). These are arranged differently in roots (central stele), stems (vascular bundles), and leaves (mesophyll).",

  // Transport in Plants
  "Xylem transport": "Water moves upward through xylem vessels driven by transpiration pull (tension), cohesion between water molecules, and adhesion to vessel walls. Root pressure also contributes, especially at night. Xylem transport is passive and unidirectional.",
  "Phloem translocation": "Movement of organic solutes (mainly sucrose) through phloem from source (photosynthetic leaves) to sink (roots, fruits, growing tips). Requires metabolic energy for loading and unloading. Bidirectional transport.",
  "Pressure-flow hypothesis": "Proposed by Ernst Münch. Sucrose is actively loaded into phloem at the source, lowering water potential. Water enters by osmosis, building turgor pressure. This pressure drives mass flow of sap toward the sink where sucrose is unloaded.",
  // Cohesion-tension theory already defined above (Transpiration section)
  "Loading and unloading": "Phloem loading: sucrose is actively pumped into sieve tubes at source tissues using H⁺-sucrose cotransporters. Phloem unloading: sucrose exits sieve tubes at sink tissues, either passively (symplastic) or actively (apoplastic).",

  // Plant Classification
  "Bryophytes": "Non-vascular plants including mosses, liverworts, and hornworts. Lack true roots, stems, and leaves. Require water for fertilization (swimming sperm). Gametophyte is the dominant generation. Found in moist habitats.",
  "Pteridophytes": "Vascular plants that reproduce by spores: ferns, horsetails, and clubmosses. First plants with true vascular tissue (xylem and phloem). Sporophyte is dominant. Require water for fertilization. Prominent in Carboniferous period.",
  "Gymnosperms": "Vascular plants with naked seeds (not enclosed in fruit): conifers, cycads, Ginkgo, and Gnetales. Wind-pollinated. Sporophyte dominant. Include the tallest (redwood) and oldest (bristlecone pine) living organisms.",
  "Angiosperms": "Flowering plants with seeds enclosed in fruits. Most diverse plant group (~300,000 species). Divided into monocots and dicots. Feature double fertilization, diverse pollination strategies, and fruit dispersal mechanisms.",
  "Monocots vs Dicots": "Monocots: one cotyledon, parallel venation, fibrous roots, floral parts in 3s, scattered vascular bundles (e.g., grasses, lilies). Dicots: two cotyledons, reticulate venation, tap root, floral parts in 4s/5s, ring-arranged bundles (e.g., roses, beans).",

  // Growth & Development
  "Growth phases": "Three phases: cell division (meristematic activity), cell elongation (vacuole expansion, wall stretching), and cell differentiation (specialization into tissue types). Growth can be measured as increase in length, weight, or cell number.",
  "Photoperiodism": "Plant response to relative lengths of day and night. Short-day plants (SDP) flower when night exceeds critical length (e.g., chrysanthemum). Long-day plants (LDP) flower when day exceeds critical length (e.g., wheat). Day-neutral plants flower regardless.",
  "Vernalization": "Cold treatment required to induce flowering in some plants. Winter wheat needs 4-8 weeks at 0-5°C. The cold stimulus is perceived at the shoot apical meristem. Important for agriculture — spring varieties don't require vernalization.",
  "Phytochrome": "A blue-green photoreceptor protein existing in two interconvertible forms: Pr (absorbs red light, 660nm) and Pfr (absorbs far-red, 730nm). Pfr is the active form that triggers responses like seed germination, de-etiolation, and flowering.",
  "Seed dormancy": "A state where viable seeds fail to germinate even under favorable conditions. Caused by hard seed coat, immature embryo, or inhibitors (ABA). Broken by scarification (mechanical/chemical), stratification (cold), light, or gibberellin treatment.",

  // Biotechnology
  "Tissue culture": "Growing plant cells, tissues, or organs on artificial nutrient medium under aseptic conditions. Based on totipotency — ability of any cell to develop into a complete organism. Used for micropropagation, somatic hybridization, and virus-free plants.",
  "Bt crops": "Transgenic crops containing cry genes from Bacillus thuringiensis. The Bt protein (Cry1Ac, Cry2Ab) is toxic to specific insect larvae when ingested. Bt cotton in India has significantly reduced bollworm damage and pesticide use.",
  "CRISPR": "CRISPR-Cas9 is a gene editing tool that uses a guide RNA to direct the Cas9 enzyme to cut DNA at specific sites. Enables precise gene modifications — insertions, deletions, or replacements. Faster and cheaper than traditional genetic engineering.",
  "Molecular markers": "DNA-based markers used for genetic mapping, plant identification, and marker-assisted selection (MAS). Types include RFLP, RAPD, SSR (microsatellites), and SNPs. Help breeders select desired traits without waiting for phenotype expression.",

  // Seed Germination
  "Imbibition": "The initial absorption of water by a dry seed through its seed coat. Causes the seed to swell and soften. Triggers metabolic reactivation, enzyme synthesis, and mobilization of stored food reserves. First step of germination.",
  "Epigeal vs Hypogeal": "Epigeal germination: hypocotyl elongates, pulling cotyledons above soil (e.g., bean, onion). Hypogeal germination: epicotyl elongates, cotyledons remain below soil (e.g., maize, pea). Affects early seedling architecture and energy use.",
  "Dormancy breaking": "Methods to break seed dormancy: scarification (scratching seed coat), stratification (cold treatment 4°C for weeks), smoke treatment, light exposure, or gibberellin application. Each method targets a specific dormancy mechanism.",
  "Gibberellin role": "Gibberellins (GA₃) trigger germination by inducing the aleurone layer to produce α-amylase enzyme, which breaks down starch into sugars in the endosperm. This provides energy for the growing embryo. Also promotes stem elongation.",
  "Viability": "The ability of a seed to germinate. Tested using the tetrazolium test — living cells stain red. Viability decreases with age and improper storage. Some seeds (lotus) remain viable for centuries; others (willow) lose viability within days.",

  // Plant Diseases
  "Fungal diseases": "Most common plant diseases. Examples: late blight of potato (Phytophthora), wheat rust (Puccinia), powdery mildew (Erysiphe), smut of wheat (Ustilago). Fungi spread via spores and thrive in warm, humid conditions.",
  "Bacterial diseases": "Caused by bacteria entering through wounds or stomata. Examples: citrus canker (Xanthomonas), fire blight of apple (Erwinia), bacterial wilt (Ralstonia), crown gall (Agrobacterium). Controlled by antibiotics and copper-based fungicides.",
  "Viral diseases": "Caused by plant viruses transmitted by vectors (aphids, whiteflies) or mechanically. Examples: tobacco mosaic virus (TMV), leaf curl, mosaic diseases. No cure — control by removing infected plants, using resistant varieties, and controlling vectors.",
  "Disease triangle": "Three factors must converge for disease: a susceptible host, a virulent pathogen, and favorable environmental conditions (temperature, humidity). Removing any one factor prevents disease. Basis of integrated disease management.",
  "IPM": "Integrated Pest Management combines multiple control methods: cultural (crop rotation, resistant varieties), biological (natural enemies, biocontrol agents), chemical (targeted pesticides as last resort), and monitoring. Minimizes environmental impact.",

  // Plant Morphology
  "Root modifications": "Roots modified for special functions: storage (carrot, radish, sweet potato), mechanical support (prop roots of banyan, stilt roots of maize), respiration (pneumatophores of mangrove), and nitrogen fixation (root nodules of legumes).",
  "Stem modifications": "Underground stems: rhizome (ginger), tuber (potato), bulb (onion), corm (colocasia). Aerial: thorns (Bougainvillea), tendrils (grapevine), phylloclades (Opuntia). Sub-aerial: runners (grass), stolons (strawberry), suckers (banana).",
  "Leaf modifications": "Leaves modified for: support (tendrils in pea), defense (spines in cactus), food capture (pitcher plant, Venus flytrap), water storage (succulent leaves of Aloe), reproduction (leaf buds of Bryophyllum), and floating (waxy leaves of lotus).",
  "Phyllotaxy": "Arrangement of leaves on the stem. Alternate/spiral (one leaf per node — mustard), opposite (two leaves per node — Calotropis), and whorled (more than two per node — Nerium). Maximizes light capture and minimizes leaf overlap.",
  "Inflorescence types": "Arrangement of flowers on the floral axis. Racemose (flowers on main axis — mustard), cymose (main axis ends in flower — jasmine), and special types: capitulum (sunflower), spadix (Arum), catkin (mulberry), and umbel (coriander).",

  // Plant Cell Biology
  "Cell wall": "Rigid outer layer made of cellulose microfibrils embedded in a matrix of hemicellulose and pectin. Primary wall is thin and flexible; secondary wall (with lignin) is thick and rigid. Provides structural support, protection, and shape to plant cells.",
  "Chloroplasts": "Double-membrane organelle containing chlorophyll for photosynthesis. Internal thylakoid membrane system (grana + stroma lamellae) houses photosystems. Stroma contains enzymes for the Calvin cycle. Has its own DNA (ctDNA) and ribosomes.",
  "Central vacuole": "Large membrane-bound compartment (tonoplast) occupying up to 90% of cell volume. Stores water, ions, sugars, organic acids, and pigments (anthocyanins). Maintains turgor pressure for cell rigidity. Also stores waste and toxic compounds.",
  "Plasmodesmata": "Microscopic channels through cell walls connecting adjacent plant cells. Allow symplastic transport of water, nutrients, hormones, and signaling molecules. Lined by plasma membrane with a desmotubule (modified ER) running through the center.",
  "Plastid types": "Three types: chloroplasts (green, photosynthesis), chromoplasts (colored — red, yellow, orange — attract pollinators), and leucoplasts (colorless, storage — amyloplasts store starch, elaioplasts store oil, proteinoplasts store protein).",

  // Water Relations
  "Water potential": "Ψ (psi) measures the free energy of water. Ψ = Ψs + Ψp, where Ψs is solute potential (always negative) and Ψp is pressure potential. Pure water has Ψ = 0. Water moves from higher to lower water potential across membranes.",
  "Osmosis": "Net movement of water molecules across a selectively permeable membrane from a region of lower solute concentration (higher Ψ) to higher solute concentration (lower Ψ). In plants, it drives water absorption by roots and maintains cell turgor.",
  "Plasmolysis": "Shrinkage of the cell membrane away from the cell wall when a cell is placed in a hypertonic solution. Water exits the cell by osmosis. Incipient plasmolysis = turgor pressure becomes zero. Severe plasmolysis can kill the cell.",
  "Turgor pressure": "The outward pressure exerted by cell contents against the cell wall when a cell absorbs water. Essential for maintaining plant rigidity, stomatal opening, and cell growth. Loss of turgor causes wilting.",
  "DPD": "Diffusion Pressure Deficit (now called water potential deficit) = suction pressure. DPD = OP - TP (osmotic pressure minus turgor pressure). A fully turgid cell has DPD = 0. A plasmolyzed cell has maximum DPD. Water moves from lower to higher DPD.",

  // Pigments
  "Chlorophylls a & b": "Chlorophyll a (C₅₅H₇₂O₅N₄Mg) is blue-green, the primary photosynthetic pigment found in all photosynthetic organisms. Chlorophyll b (C₅₅H₇₀O₆N₄Mg) is yellow-green, an accessory pigment that broadens the absorption spectrum.",
  "Carotenoids": "Accessory pigments (yellow, orange, red) that absorb blue-violet light (400-500nm). Include carotenes (lycopene in tomatoes, β-carotene in carrots) and xanthophylls. Also serve as photoprotective agents, preventing chlorophyll damage from excess light.",
  "Anthocyanins": "Water-soluble pigments found in vacuoles that produce red, purple, and blue colors in flowers, fruits, and autumn leaves. pH-dependent: red in acidic, blue in alkaline conditions. Attract pollinators and seed dispersers.",
  "Absorption spectrum": "Graph showing the wavelengths of light absorbed by a pigment. Chlorophyll absorbs most strongly in blue (430nm) and red (662nm), reflecting green. The action spectrum (photosynthesis rate vs wavelength) closely matches the absorption spectrum.",
  "Chromatography": "Technique to separate plant pigments based on their solubility in a solvent. Paper/thin-layer chromatography separates chlorophyll a, b, carotenoids, and xanthophylls. Rf value = distance traveled by pigment / distance traveled by solvent.",

  // Metabolism
  "Primary metabolism": "Metabolic processes essential for growth and survival: photosynthesis, respiration, protein synthesis, lipid metabolism, and nucleic acid synthesis. Produces primary metabolites: amino acids, sugars, fatty acids, and nucleotides.",
  "Secondary metabolites": "Compounds not directly involved in growth but provide ecological advantages. Include alkaloids (caffeine, morphine — defense), terpenes (menthol, rubber), phenolics (tannins, lignin), and flavonoids. Many have pharmaceutical importance.",
  "Nitrogen metabolism": "Involves nitrogen fixation (N₂ → NH₃), nitrate reduction (NO₃⁻ → NH₄⁺), amino acid synthesis (NH₄⁺ + carbon skeleton → amino acids), and transamination. Glutamine synthetase and glutamate synthase are key enzymes.",
  "Lipid metabolism": "Fatty acid synthesis occurs in plastids. Plants produce both saturated and unsaturated fatty acids. Lipids serve as energy storage (oils in seeds), membrane components (phospholipids), protective coatings (cutin, wax), and signaling molecules.",
  "Carbohydrate metabolism": "Central to plant function. Photosynthesis produces glucose; respiration breaks it down for energy. Sucrose is the main transport sugar. Starch is the main storage form. Cellulose (structural), hemicellulose, and pectin form cell walls.",

  // Plant Responses
  "Phototropism": "Directional growth response toward (positive) or away from (negative) light. Shoots show positive phototropism. Auxin redistributes to the shaded side, causing differential cell elongation. First studied by Charles Darwin and Fritz Went.",
  "Gravitropism": "Directional growth response to gravity. Roots show positive gravitropism (grow downward); shoots show negative (grow upward). Starch-filled amyloplasts (statoliths) in root cap cells sense gravity and trigger auxin redistribution.",
  "Thigmonasty": "Non-directional response to touch. Example: Mimosa pudica (sensitive plant) — leaves fold rapidly when touched due to rapid loss of turgor in pulvinus cells. Tendrils coil around support (thigmotropism is directional).",
  "Stress responses": "Plants respond to abiotic stress (drought, heat, cold, salinity) through ABA signaling, heat shock proteins, osmolytes, and antioxidant production. Biotic stress (pathogens, herbivores) triggers jasmonic acid, salicylic acid, and phytoalexins.",
  "Circadian rhythms": "Internal biological clocks (~24-hour cycles) that regulate physiological processes: stomatal opening, leaf movements, flowering, and gene expression. Controlled by circadian clock genes and entrained by light-dark cycles.",

  // Soil and Root
  "Rhizosphere": "The narrow zone of soil directly surrounding plant roots, teeming with microbial activity (10-100× more than bulk soil). Root exudates attract beneficial microorganisms. Critical for nutrient cycling, pathogen defense, and plant health.",
  "Mycorrhizae": "Symbiotic associations between fungi and plant roots. Ectomycorrhizae form a sheath around roots (forest trees). Endomycorrhizae (arbuscular) penetrate root cells (most crop plants). Enhance phosphorus uptake and drought tolerance.",
  "Root exudates": "Organic compounds (sugars, amino acids, organic acids, flavonoids) secreted by roots into the rhizosphere. Attract beneficial microorganisms, facilitate nutrient mobilization, and can inhibit competing plants (allelopathy).",
  "Soil microbiome": "The community of microorganisms in soil: bacteria, fungi, archaea, protozoa, and viruses. They decompose organic matter, fix nitrogen, solubilize phosphorus, produce growth hormones, and suppress pathogens. Essential for soil fertility.",

  // Algae
  "Green algae": "Chlorophyta — closest ancestors of land plants. Contain chlorophyll a and b, store starch. Range from unicellular (Chlamydomonas) to multicellular (Ulva). Found in freshwater and marine habitats. Important in aquatic food chains.",
  "Brown algae": "Phaeophyta — large, complex, primarily marine algae. Contain fucoxanthin (brown pigment). Include kelps (Laminaria, Macrocystis — up to 60m long). Form underwater forests that support diverse marine ecosystems.",
  "Red algae": "Rhodophyta — mostly marine, found at greater depths due to phycoerythrin (red pigment) which absorbs blue-green light. Source of agar (Gelidium) and carrageenan (Chondrus). Some species deposit calcium carbonate (coralline algae).",
  "Algal bloom": "Rapid proliferation of algae in water bodies due to excess nutrients (eutrophication). Produces toxins, depletes oxygen (hypoxia), blocks sunlight, and causes fish kills. Harmful algal blooms (HABs) from dinoflagellates cause red tides.",
  "Economic importance": "Algae provide food (Spirulina, nori), fertilizer (seaweed), agar and carrageenan (food/lab use), alginates (textile/food industry), biofuels, oxygen production, and wastewater treatment. They fix about 50% of global carbon.",

  // Secondary Growth
  "Vascular cambium": "Lateral meristem between xylem and phloem that produces secondary xylem (wood) inward and secondary phloem outward. Its activity causes increase in stem girth (secondary growth). More active in dicots and gymnosperms.",
  "Cork cambium": "Also called phellogen, produces cork (phellem) outward and secondary cortex (phelloderm) inward. Together they form the periderm (bark). Cork cells are dead, suberized, and impermeable — protecting against water loss and infection.",
  "Annual rings": "Each year's growth of secondary xylem forms a ring visible in cross-section. Spring wood (early) has wider vessels; autumn wood (late) has narrower vessels. Ring width indicates climate conditions. Used in dendrochronology for dating.",
  "Heartwood vs Sapwood": "Sapwood (outer, lighter) is functional xylem actively transporting water. Heartwood (inner, darker) is non-functional, filled with tannins, resins, and oils that provide structural support and resistance to decay.",
  "Bark formation": "Bark includes all tissues outside the vascular cambium: secondary phloem + periderm. As the stem expands, outer bark cracks. Lenticels (pores in bark) allow gas exchange. Bark protects against physical damage, pathogens, and water loss.",

  // ZOOLOGY
  "Major phyla": "Animal kingdom includes Porifera (sponges), Cnidaria (jellyfish), Platyhelminthes (flatworms), Nematoda (roundworms), Annelida (segmented worms), Arthropoda (insects, spiders), Mollusca (snails, octopi), Echinodermata (starfish), and Chordata (vertebrates).",
  "Vertebrate classes": "Five classes: Pisces (fish — gills, fins), Amphibia (frogs — dual life), Reptilia (snakes — scales, eggs), Aves (birds — feathers, flight), and Mammalia (mammals — hair, milk). Each shows increasing complexity and terrestrial adaptation.",
  "Binomial nomenclature": "System devised by Carl Linnaeus where each species gets a two-part Latin name: genus + species epithet (e.g., Homo sapiens). Written in italics, genus capitalized. Ensures universal naming across languages and regions.",
  "Body plans": "Animals show different body plans: asymmetry (sponges), radial symmetry (jellyfish), bilateral symmetry (most animals). Body cavity types: acoelomate (no cavity), pseudocoelomate (false cavity), coelomate (true cavity lined by mesoderm).",
  "Evolutionary relationships": "Phylogenetics reconstructs evolutionary history using morphological, molecular, and fossil data. Cladistics groups organisms by shared derived characters (synapomorphies). DNA/protein sequence comparisons reveal common ancestry.",

  // Evolution
  "Natural selection": "Darwin's mechanism of evolution: individuals with favorable variations survive and reproduce more (survival of the fittest). Over generations, beneficial traits accumulate in the population. Requires variation, inheritance, and differential fitness.",
  "Evidence for evolution": "Fossil record (transitional forms), comparative anatomy (homologous and analogous structures), vestigial organs (human appendix), molecular biology (DNA similarity), biogeography (island species), and embryology (similar developmental stages).",
  "Speciation": "Formation of new species through reproductive isolation. Allopatric speciation: geographic barrier separates populations. Sympatric speciation: reproductive isolation within same area (polyploidy). Parapatric: adjacent populations with limited gene flow.",
  "Hardy-Weinberg": "In a large, randomly mating population with no evolution, allele frequencies remain constant: p² + 2pq + q² = 1. Deviations indicate evolution through mutation, selection, genetic drift, migration, or non-random mating.",
  "Adaptive radiation": "Rapid diversification of a single ancestral species into many forms adapted to different niches. Classic examples: Darwin's finches (beak shapes), Australian marsupials, Hawaiian honeycreepers, cichlid fish in African lakes.",

  // Genetics
  "DNA structure": "Double helix of two antiparallel polynucleotide strands. Sugar-phosphate backbone with nitrogenous bases projecting inward. Base pairing: A=T (2 H-bonds), G≡C (3 H-bonds). One complete turn = 3.4nm = 10 base pairs. Discovered by Watson & Crick (1953).",
  "Replication": "Semi-conservative process where each parent strand serves as template. Helicase unwinds DNA; primase adds RNA primer; DNA polymerase III synthesizes new strand (5'→3'). Leading strand is continuous; lagging strand forms Okazaki fragments.",
  "Transcription": "DNA → mRNA synthesis by RNA polymerase. Template strand read 3'→5'; mRNA synthesized 5'→3'. In prokaryotes: single RNA polymerase. In eukaryotes: RNA Pol I (rRNA), II (mRNA), III (tRNA). Pre-mRNA undergoes splicing, capping, and polyadenylation.",
  "Translation": "mRNA → protein synthesis on ribosomes. Three stages: initiation (start codon AUG, Met), elongation (tRNA brings amino acids, peptide bonds form), termination (stop codon UAA/UAG/UGA). Occurs on rough ER (secretory proteins) or free ribosomes (cytoplasmic proteins).",
  "Mutations": "Changes in DNA sequence. Point mutations: substitution (silent, missense, nonsense), insertion, deletion (can cause frameshift). Chromosomal mutations: deletion, duplication, inversion, translocation. Can be spontaneous or induced (mutagens).",

  // Animal Behavior
  "Innate vs learned": "Innate behaviors are genetically programmed (reflexes, fixed action patterns, instincts). Learned behaviors are acquired through experience (habituation, conditioning, imprinting, insight learning). Most behaviors have both innate and learned components.",
  "Communication": "Animals communicate through visual signals (displays, colors), auditory (songs, calls), chemical (pheromones), tactile (grooming), and electrical signals (electric fish). Communication serves in mating, territory defense, alarm, and coordination.",
  "Social behavior": "Group living provides benefits (protection, hunting efficiency, shared vigilance) and costs (competition, disease spread). Social structures range from aggregations to complex societies (eusocial insects with queens, workers, and soldiers).",
  "Migration": "Seasonal movement between habitats for breeding, feeding, or climate. Arctic tern (longest — pole to pole), monarch butterflies, salmon, wildebeest. Navigation uses sun compass, magnetic fields, star patterns, and landmarks.",

  // Biodiversity
  "Levels of biodiversity": "Three levels: genetic diversity (variation within species), species diversity (number of species in an area), and ecosystem diversity (variety of habitats and ecological processes). All three are interconnected and important for ecosystem stability.",
  "Hotspots": "Regions with exceptionally high species richness and endemism that are under threat. 36 identified hotspots cover 2.5% of Earth's surface but contain 50% of plant species. Examples: Western Ghats (India), Madagascar, Amazon basin.",
  "Threats": "Major threats to biodiversity (HIPPO): Habitat loss (deforestation, urbanization), Invasive species, Pollution, Population growth/overexploitation, and climate change (global warming). Sixth mass extinction is currently underway.",
  "Conservation": "In-situ conservation: protecting species in natural habitats (national parks, wildlife sanctuaries, biosphere reserves). Ex-situ conservation: preserving species outside habitats (zoos, botanical gardens, seed banks, cryopreservation).",
  "Endangered species": "Species at risk of extinction. Classified by IUCN Red List: Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern. Examples: Bengal tiger, snow leopard, Indian rhinoceros, Asian elephant.",

  // Conservation Biology
  "MVP": "Minimum Viable Population — the smallest population size that can survive in the wild long-term (typically 500-5000 individuals). Below MVP, populations face inbreeding depression, genetic drift, and demographic stochasticity.",
  "Habitat corridors": "Strips of habitat connecting fragmented populations, allowing gene flow and migration. Examples include wildlife crossings over highways and riparian buffers along rivers. Critical for maintaining genetic diversity in fragmented landscapes.",
  "Keystone species": "Species whose impact on ecosystem function is disproportionately large relative to their abundance. Removal causes significant changes. Examples: sea otters (kelp forests), wolves (trophic cascades), bees (pollination networks).",
  "Captive breeding": "Breeding endangered species in controlled environments (zoos, breeding centers) for eventual reintroduction to the wild. Success stories: California condor, black-footed ferret, Arabian oryx. Challenges: genetic diversity, behavioral adaptation.",
  "Restoration ecology": "Science of restoring degraded ecosystems to their natural state. Techniques include reforestation, wetland restoration, soil remediation, and species reintroduction. Goal is to recover ecosystem structure, function, and biodiversity.",

  // Animal Adaptations
  "Structural adaptations": "Physical features that help survival: thick fur for cold (polar bear), webbed feet for swimming (ducks), long beaks for nectar (hummingbirds), streamlined body for speed (cheetah), and shell for protection (turtles).",
  "Physiological adaptations": "Internal body function changes: hibernation (reduced metabolism), estivation (summer dormancy), counter-current heat exchange (arctic animals), diving reflex (seals), and antifreeze proteins (arctic fish).",
  "Behavioral adaptations": "Actions that improve survival: nocturnal activity (desert animals), migration (seasonal), group hunting (wolves, lions), tool use (chimpanzees, crows), and play behavior (practice for survival skills).",
  "Camouflage": "Blending with surroundings to avoid predators or ambush prey. Types: crypsis (matching background — leaf insects), mimicry (resembling dangerous species — viceroy butterfly), counter-shading (dark above, light below — fish), and disruptive coloration.",

  // Reproduction
  "Sexual vs asexual": "Sexual reproduction involves gamete fusion, producing genetically diverse offspring (meiosis). Asexual reproduction produces clones from a single parent (budding, fragmentation, binary fission). Sexual reproduction provides variation for adaptation.",
  "External vs internal fertilization": "External fertilization occurs outside the body in aquatic environments (fish, amphibians — many eggs, low survival). Internal fertilization occurs inside the female body (reptiles, birds, mammals — fewer eggs, higher survival rate).",
  "Reproductive strategies": "r-strategists produce many offspring with little parental care (fish, insects). K-strategists produce few offspring with extensive care (elephants, humans). Trade-off between offspring quantity and quality.",
  "Parthenogenesis": "Development of an embryo from an unfertilized egg. Found in some insects (bees — drones are haploid), reptiles (komodo dragons), and fish. Can be obligate or facultative. Produces clones or near-clones of the mother.",
  "Parental care": "Investment by parents to increase offspring survival. Ranges from none (sea turtles) to extensive (mammals). Includes nest building, incubation, feeding, protection, and teaching. Usually correlates with fewer offspring.",

  // Embryology
  "Cleavage": "Rapid mitotic divisions of the zygote without cell growth. Produces a ball of cells (morula → blastula). Types: holoblastic (complete division in eggs with little yolk) and meroblastic (partial division in yolky eggs like birds).",
  "Gastrulation": "Reorganization of blastula cells into three germ layers: ectoderm (outer — skin, nervous system), mesoderm (middle — muscles, skeleton, circulatory), endoderm (inner — gut lining, lungs, liver). Establishes the basic body plan.",
  "Germ layers": "Ectoderm forms skin, brain, and nerves. Mesoderm forms muscles, bones, heart, kidneys, and blood. Endoderm forms the gut lining, lungs, liver, and pancreas. Diploblastic animals (cnidarians) have only ectoderm and endoderm.",
  "Organogenesis": "Formation of organs from germ layers. Neurulation: ectoderm folds to form the neural tube (future brain and spinal cord). Somites from mesoderm form vertebrae and muscles. Gut tube from endoderm differentiates into organs.",
  "Induction": "One group of cells influences the developmental fate of adjacent cells through signaling molecules (morphogens). Spemann's organizer (dorsal lip) induces neural plate formation. Crucial for proper pattern formation and organ development.",

  // Ecology
  "Population growth": "Exponential growth (J-curve): unlimited resources, Nt = N₀eʳᵗ. Logistic growth (S-curve): limited resources, dN/dt = rN(K-N)/K where K = carrying capacity. Most populations show logistic growth in nature.",
  "Food chains": "Linear sequence of energy transfer: producer → primary consumer → secondary consumer → tertiary consumer. Each level is a trophic level. Energy decreases at each step (~10% rule). Length is usually 3-5 levels.",
  "Trophic levels": "Feeding positions in a food chain: T1 = producers (plants), T2 = primary consumers (herbivores), T3 = secondary consumers (carnivores), T4 = tertiary consumers (top predators). Decomposers operate at all levels.",
  "Ecological pyramids": "Graphical representation of trophic structure. Pyramid of numbers (organisms count), biomass (total weight), and energy (energy flow). Energy pyramids are always upright; others may be inverted (e.g., tree ecosystem for numbers).",
  "Biogeochemical cycles": "Cycling of elements through biotic and abiotic components: carbon cycle (photosynthesis/respiration), nitrogen cycle (fixation/denitrification), phosphorus cycle (weathering/uptake), and water cycle (evaporation/precipitation).",

  // Marine Biology
  "Ocean zones": "Photic zone (0-200m, light penetrates), aphotic zone (>200m, no light). Pelagic (open water): epipelagic, mesopelagic, bathypelagic, abyssopelagic. Benthic (ocean floor): continental shelf, slope, abyssal plain, and hadal zone (trenches).",
  "Coral reefs": "Marine biodiversity hotspots built by coral polyps (cnidarians) that secrete calcium carbonate skeletons. Zooxanthellae (symbiotic algae) provide corals with food via photosynthesis. Threatened by ocean acidification, warming, and bleaching.",
  "Phytoplankton": "Microscopic photosynthetic organisms floating in ocean surface waters. Include diatoms, dinoflagellates, and cyanobacteria. Produce ~50% of Earth's oxygen and form the base of marine food webs. Crucial for carbon sequestration.",
  "Deep sea life": "Organisms adapted to extreme conditions: high pressure, no light, near-freezing temperatures. Include bioluminescent fish, giant squid, tube worms at hydrothermal vents, and chemosynthetic bacteria. Many species remain undiscovered.",
  "Marine conservation": "Protecting ocean ecosystems through Marine Protected Areas (MPAs), sustainable fishing quotas, reducing pollution and plastic waste, combating climate change, and preventing habitat destruction. Only ~7% of oceans are protected.",

  // Homeostasis
  "Homeostasis": "Maintenance of a stable internal environment despite external changes. Regulated variables include body temperature, blood pH (7.35-7.45), blood glucose, water balance, and ion concentrations. Essential for enzyme function and cell survival.",
  "Thermoregulation": "Maintaining body temperature. Endotherms (mammals, birds) generate internal heat through metabolism. Ectotherms (reptiles, fish) rely on external heat sources. Mechanisms: sweating, shivering, vasodilation/vasoconstriction, and behavioral changes.",
  "Osmoregulation": "Maintaining water and ion balance. Freshwater fish absorb water (dilute urine, active ion uptake). Marine fish lose water (drink seawater, excrete salt). Humans regulate through kidneys (ADH controls water reabsorption).",
  "Feedback loops": "Negative feedback: response opposes the stimulus to maintain homeostasis (thermostat model — cooling when too hot). Positive feedback: response amplifies the stimulus (blood clotting, childbirth contractions). Most homeostatic mechanisms are negative feedback.",
  "Organ system integration": "Homeostasis requires coordination between multiple organ systems. Nervous system (fast, short-term), endocrine system (slow, long-term), and immune system (defense) work together. Example: blood pressure regulation involves heart, kidneys, brain, and hormones.",

  // Parasitology
  "Ectoparasites": "Parasites that live on the host's body surface. Examples: ticks, fleas, lice, mosquitoes, and leeches. They feed on blood or skin cells. Can transmit diseases (malaria via mosquitoes, Lyme disease via ticks). Controlled by insecticides and hygiene.",
  "Endoparasites": "Parasites living inside the host's body. Examples: tapeworms (intestine), Plasmodium (blood cells), liver flukes, roundworms (Ascaris). Often have complex life cycles with multiple hosts. Cause diseases like malaria, elephantiasis, and trichinosis.",
  "Life cycles": "Many parasites have complex life cycles involving multiple hosts. Definitive host harbors the adult/sexual stage. Intermediate host harbors larval/asexual stage. Example: Plasmodium — mosquito (definitive), human (intermediate).",
  "Host specificity": "The range of hosts a parasite can infect. Specialists infect one or few host species; generalists infect many. Determined by receptor compatibility, immune evasion ability, and physiological requirements of the parasite.",
  "Coevolution": "Reciprocal evolutionary changes between interacting species. Host evolves resistance; parasite evolves counter-measures (evolutionary arms race). Red Queen hypothesis: species must continuously evolve to maintain fitness relative to coevolving species.",

  // Entomology
  "Insect anatomy": "Three body regions: head (antennae, compound eyes, mouthparts), thorax (3 pairs of legs, usually 2 pairs of wings), abdomen (reproductive and digestive organs). Exoskeleton of chitin. Open circulatory system with hemolymph.",
  "Metamorphosis": "Complete (holometabolous): egg → larva → pupa → adult (butterflies, beetles). Incomplete (hemimetabolous): egg → nymph → adult (grasshoppers, cockroaches). Hormones (ecdysone, juvenile hormone) control metamorphic transitions.",
  "Pest management": "IPM approach: monitoring, biological control (natural enemies like ladybugs, parasitic wasps), cultural practices (crop rotation), mechanical methods (traps), and chemical control (insecticides as last resort). Sterile insect technique for some species.",
  "Social insects": "Highly organized societies with division of labor. Eusocial insects (ants, bees, termites) have queen (reproduction), workers (foraging, nursing), and soldiers (defense). Communication through pheromones, dances (honey bee waggle dance).",

  // PHYSIOLOGY
  "Feeding types": "Herbivores (plant eaters — long intestines), carnivores (meat eaters — short intestines, sharp teeth), omnivores (both — moderate gut), filter feeders (baleen whales), detritivores (earthworms), and fluid feeders (mosquitoes, butterflies).",
  "Digestive system types": "Incomplete digestive system: single opening (cnidarians, flatworms). Complete: mouth to anus (most animals). Types of digestion: intracellular (within cells — amoeba), extracellular (in gut lumen — most animals), or both.",
  "Essential nutrients": "Macronutrients: carbohydrates (energy), proteins (building/repair), fats (energy storage/insulation). Micronutrients: vitamins (organic cofactors) and minerals (inorganic ions). Water is also essential for all metabolic processes.",
  "Vitamins": "Fat-soluble (A — vision, D — calcium, E — antioxidant, K — clotting) stored in body. Water-soluble (B complex — metabolism, C — collagen/immunity) need regular intake. Deficiency causes specific diseases: scurvy (C), rickets (D), beriberi (B1).",
  "Deficiency diseases": "Vitamin A deficiency → night blindness. Vitamin D → rickets/osteomalacia. Vitamin C → scurvy. Iron → anemia. Iodine → goiter. Protein-energy malnutrition: kwashiorkor (protein) and marasmus (total calories). Prevention through balanced diet.",

  // Locomotion
  "Amoeboid movement": "Movement using pseudopodia (false feet). Cytoplasm flows in the direction of movement — the ectoplasm (gel) converts to endoplasm (sol) and vice versa. Used by amoeba and white blood cells (during immune response).",
  "Swimming": "Aquatic locomotion through body undulations (fish, snakes), fin movements, jet propulsion (jellyfish, squid), or limb paddling (frogs, turtles). Streamlined body shapes reduce drag. Fish use swim bladder for buoyancy control.",
  "Flight": "Powered flight evolved independently in insects, birds, and bats. Requires lightweight skeleton (hollow bones in birds), large flight muscles (pectoralis), wing aerodynamics (airfoil shape), and high metabolic rate for energy.",
  "Skeletal-muscular system": "Muscles attach to skeleton via tendons. Contraction of antagonistic muscle pairs (flexor/extensor) creates movement. Skeletal muscle is striated and voluntary. Lever systems amplify force or speed depending on attachment points.",
  "Energy costs": "Locomotion energy costs: swimming is most efficient per unit distance, flying is intermediate, and running is most expensive. Larger animals have lower mass-specific costs. Speed affects efficiency — each animal has an optimal gait.",

  // Microbiology
  "Fermentation": "Anaerobic process where microorganisms convert sugars to useful products. Ethanol fermentation by yeast (bread, beer, wine). Lactic acid fermentation by Lactobacillus (yogurt, cheese). Acetic acid fermentation (vinegar).",
  "Antibiotics": "Substances produced by microorganisms that kill or inhibit other microbes. Penicillin (Alexander Fleming, 1928, from Penicillium). Types: bactericidal (kill) vs bacteriostatic (inhibit). Antibiotic resistance is a growing global concern.",
  "Biogas": "Renewable fuel produced by anaerobic digestion of organic waste by methanogenic bacteria (Methanobacterium). Biogas = 60-70% methane + 30-40% CO₂. Used for cooking, heating, and electricity. Gobar gas plants common in rural India.",
  "Sewage treatment": "Primary treatment: physical settling of solids. Secondary treatment: biological — activated sludge process using aerobic bacteria to decompose organic matter, reducing BOD. Tertiary treatment: chemical disinfection. Produces biogas as byproduct.",
  "Probiotics": "Live beneficial microorganisms that improve gut health when consumed. Include Lactobacillus (yogurt), Bifidobacterium, and Saccharomyces boulardii. Benefits: improved digestion, immune support, prevention of diarrhea, and vitamin synthesis.",

  // Digestive System
  "GI tract organs": "Mouth (mechanical and chemical digestion) → Pharynx → Esophagus (peristalsis) → Stomach (HCl, pepsin, churning) → Small intestine (duodenum, jejunum, ileum — major digestion and absorption) → Large intestine (water absorption) → Rectum → Anus.",
  "Enzymes": "Salivary amylase (starch → maltose), pepsin (proteins in stomach), trypsin and chymotrypsin (proteins in duodenum), lipase (fats), maltase/sucrase/lactase (disaccharides → monosaccharides). Each enzyme works at optimal pH.",
  "Absorption": "Occurs mainly in the small intestine through villi and microvilli (brush border), increasing surface area ~600×. Monosaccharides and amino acids absorbed by active transport into blood capillaries. Fatty acids enter lacteals (lymph).",
  "Accessory organs": "Liver produces bile (emulsifies fats, stored in gallbladder). Pancreas produces pancreatic juice with enzymes (trypsin, lipase, amylase) and bicarbonate (neutralizes acid). Salivary glands produce saliva with amylase and lysozyme.",
  "Peristalsis": "Wave-like muscular contractions that push food through the digestive tract. Circular muscle contracts behind food bolus; longitudinal muscle contracts ahead. Controlled by the enteric nervous system (the 'gut brain') and autonomic nerves.",

  // Circulatory System
  "Heart structure": "Four-chambered heart (2 atria, 2 ventricles) in mammals. Right side pumps deoxygenated blood to lungs (pulmonary circuit). Left side pumps oxygenated blood to body (systemic circuit). Separated by septum. SA node is the pacemaker.",
  "Cardiac cycle": "One heartbeat: atrial systole (atria contract, blood enters ventricles) → ventricular systole (ventricles contract, blood pumped out) → diastole (all chambers relax, filling with blood). One cycle ≈ 0.8 seconds at 72 bpm.",
  "Blood vessels": "Arteries carry blood away from heart (thick walls, elastic, high pressure). Veins carry blood toward heart (thinner walls, valves prevent backflow). Capillaries connect arteries and veins (one cell thick, site of exchange).",
  "Blood components": "Plasma (55%, liquid matrix with proteins, nutrients, hormones). Red blood cells/erythrocytes (carry O₂ via hemoglobin). White blood cells/leukocytes (immune defense). Platelets/thrombocytes (blood clotting).",
  "Blood groups": "ABO system: determined by antigens on RBC surface. Type A (A antigen), B (B antigen), AB (both — universal recipient), O (neither — universal donor). Rh factor: Rh+ or Rh-. Blood typing is critical for safe transfusions.",

  // Respiratory System
  "Respiratory tract": "Nose (filters, warms, moistens air) → Pharynx → Larynx (voice box) → Trachea (C-shaped cartilage rings) → Bronchi → Bronchioles → Alveoli (300 million in lungs). Progressive branching increases surface area for gas exchange.",
  "Alveolar exchange": "Gas exchange across the respiratory membrane (alveolar wall + capillary wall = 0.2μm). O₂ diffuses from alveoli into blood (binds hemoglobin). CO₂ diffuses from blood into alveoli. Driven by partial pressure gradients.",
  "Hemoglobin": "Protein in RBCs with four heme groups, each binding one O₂ molecule. Oxygenated = bright red (oxyhemoglobin). Deoxygenated = dark red. Sigmoidal oxygen-dissociation curve shows cooperative binding. Carbon monoxide has 200× higher affinity than O₂.",
  "Breathing mechanism": "Inspiration: diaphragm contracts (flattens) + external intercostals contract → thoracic volume increases → intra-pulmonary pressure decreases → air enters. Expiration: muscles relax → elastic recoil → air pushed out. Controlled by medulla oblongata.",
  "Lung volumes": "Tidal volume (TV, 500mL — normal breath), inspiratory reserve (IRV, 2500mL), expiratory reserve (ERV, 1100mL), residual volume (RV, 1200mL — always remains). Vital capacity = TV + IRV + ERV ≈ 4100mL. Total lung capacity ≈ 5300mL.",

  // Nervous System
  "CNS and PNS": "Central Nervous System = brain + spinal cord (integration and processing). Peripheral Nervous System = cranial nerves (12 pairs) + spinal nerves (31 pairs). PNS divided into somatic (voluntary) and autonomic (involuntary — sympathetic and parasympathetic).",
  "Neuron structure": "Functional unit of nervous system. Cell body (soma) with nucleus → dendrites (receive signals) → axon (transmits signals) → axon terminals (synaptic knobs). Myelin sheath (Schwann cells) insulates and speeds conduction. Three types: sensory, motor, interneurons.",
  "Action potential": "Electrical signal traveling along a neuron. Resting potential = -70mV. Stimulus opens Na⁺ channels → depolarization (+30mV). K⁺ channels open → repolarization. Na⁺/K⁺ pump restores resting state. All-or-none principle. Speed: 1-120 m/s.",
  "Synaptic transmission": "Signal crosses synapse via neurotransmitters. Action potential reaches axon terminal → Ca²⁺ enters → vesicles fuse with membrane → neurotransmitter released (acetylcholine, dopamine, serotonin) → binds receptors on postsynaptic cell → response generated.",
  "Brain regions": "Cerebrum (thinking, voluntary actions, memory), cerebellum (coordination, balance), medulla oblongata (vital functions — breathing, heartbeat), hypothalamus (homeostasis, hormones), thalamus (relay center), and limbic system (emotions, memory).",

  // Excretory System
  "Kidney structure": "Bean-shaped organs with outer cortex (glomeruli) and inner medulla (loops of Henle, collecting ducts). Functional unit: nephron (~1 million per kidney). Renal pelvis collects urine → ureter → bladder → urethra.",
  "Nephron function": "Glomerular filtration (blood filtered in Bowman's capsule, 125 mL/min GFR). Tubular reabsorption (99% water, glucose, amino acids reabsorbed in PCT, loop of Henle, DCT). Tubular secretion (H⁺, K⁺, toxins added to filtrate).",
  "Urine formation": "Three steps: filtration (plasma filtered in glomerulus), reabsorption (useful substances returned to blood), and secretion (waste added to urine). Normal urine: 95% water, urea, creatinine, uric acid, ions. 1-1.5L/day produced.",
  "Hormonal control": "ADH (antidiuretic hormone) from pituitary increases water reabsorption in collecting ducts. Aldosterone from adrenal cortex increases Na⁺ reabsorption. ANP (atrial natriuretic peptide) promotes Na⁺ excretion. Renin-angiotensin system regulates blood pressure.",

  // Muscular System
  "Muscle types": "Three types: skeletal (striated, voluntary, attached to bones), cardiac (striated, involuntary, found only in heart, intercalated discs), and smooth (non-striated, involuntary, found in gut, blood vessels, bladder). Each has distinct structure and function.",
  "Sliding filament theory": "Muscle contraction occurs when thin filaments (actin) slide over thick filaments (myosin). Ca²⁺ released from SR exposes binding sites on actin. Myosin heads bind, pivot (power stroke), release, and rebind using ATP. Sarcomere shortens.",
  "Neuromuscular junction": "Synapse between motor neuron and muscle fiber. Acetylcholine released from nerve terminal crosses the synaptic cleft and binds nicotinic receptors on muscle membrane, causing depolarization (end-plate potential) and triggering contraction.",
  "Motor units": "A motor neuron and all the muscle fibers it innervates. Small motor units (eye muscles — 10 fibers) for fine control. Large motor units (leg muscles — 1000+ fibers) for powerful movements. Recruitment of more units increases force.",
  "Energy sources": "Immediate: ATP and creatine phosphate (first 8-10 seconds). Short-term: anaerobic glycolysis (30-60 seconds, produces lactic acid). Long-term: aerobic respiration (minutes to hours, uses glucose and fatty acids). Oxygen debt after exercise.",

  // Endocrine System
  "Major glands": "Hypothalamus, pituitary (master gland), thyroid (T3/T4 — metabolism), parathyroid (Ca²⁺), adrenals (cortisol, adrenaline), pancreas (insulin/glucagon), gonads (estrogen/testosterone), pineal (melatonin), and thymus (T-cell maturation).",
  "Feedback mechanisms": "Negative feedback: hormone product inhibits further hormone release (thyroid axis: TRH → TSH → T3/T4 → inhibits TRH/TSH). Positive feedback: rare, amplifying response (oxytocin during labor, LH surge causing ovulation).",
  "Hormone types": "Peptide/protein hormones (insulin, growth hormone — bind surface receptors, water-soluble). Steroid hormones (cortisol, estrogen — enter cells, bind nuclear receptors, lipid-soluble). Amine hormones (adrenaline, thyroid hormones — varied mechanisms).",
  "Pituitary gland": "Anterior pituitary: GH (growth), TSH (thyroid), ACTH (adrenal cortex), FSH and LH (gonads), prolactin (milk). Posterior pituitary: ADH (water retention), oxytocin (uterine contraction, milk let-down). Controlled by hypothalamus.",
  "Diabetes": "Type 1: autoimmune destruction of pancreatic β-cells → no insulin production (insulin-dependent, juvenile onset). Type 2: insulin resistance → cells don't respond to insulin (non-insulin-dependent, adult onset, linked to obesity). Both cause hyperglycemia.",

  // Immune System
  "Innate vs adaptive": "Innate immunity: non-specific, immediate, no memory (skin barriers, phagocytes, complement, inflammation). Adaptive immunity: specific, takes days, has memory (B and T lymphocytes). Both work together for complete defense.",
  "B cells and antibodies": "B lymphocytes mature in bone marrow. When activated by antigens, they differentiate into plasma cells (produce antibodies/immunoglobulins) and memory B cells. Antibodies: IgG (blood), IgA (mucosa), IgM (first response), IgE (allergies).",
  "T cell types": "Helper T cells (CD4+): activate B cells and other immune cells via cytokines. Cytotoxic T cells (CD8+): directly kill infected/cancer cells. Regulatory T cells: suppress immune response. Memory T cells: provide long-term immunity.",
  "Vaccination": "Introduction of weakened/killed pathogens or their antigens to stimulate adaptive immune response and memory without causing disease. Types: live attenuated, inactivated, subunit, mRNA, and viral vector vaccines. Basis of herd immunity.",
  "Autoimmune diseases": "Immune system attacks self-tissues. Examples: rheumatoid arthritis (joints), type 1 diabetes (pancreatic β-cells), lupus (multiple organs), multiple sclerosis (myelin sheath). Caused by failure of self-tolerance mechanisms.",

  // Skeletal System
  "Bone types": "Based on shape: long (femur), short (carpals), flat (skull), irregular (vertebrae), sesamoid (patella). Based on structure: compact bone (dense, strong outer layer) and spongy/cancellous bone (inner, lightweight, contains marrow).",
  "Bone cells": "Osteoblasts (bone-forming cells, deposit matrix), osteocytes (mature bone cells in lacunae, maintain bone), osteoclasts (bone-resorbing cells, break down bone for remodeling). Bone remodeling is continuous throughout life.",
  "Joint classification": "Fibrous joints (immovable — skull sutures), cartilaginous joints (slightly movable — intervertebral discs), synovial joints (freely movable — knee, shoulder). Synovial joint types: hinge, ball-and-socket, pivot, gliding, saddle, condyloid.",
  "Skeletal divisions": "Axial skeleton (80 bones): skull (22), vertebral column (26), ribs (24), sternum. Appendicular skeleton (126 bones): pectoral girdle, upper limbs, pelvic girdle, lower limbs. Total: 206 bones in adult human.",
  "Bone marrow": "Red marrow (found in flat bones and epiphyses of long bones): produces red blood cells, white blood cells, and platelets (hematopoiesis). Yellow marrow (in diaphysis of long bones): stores fat. Can convert back to red marrow if needed.",

  // Reproductive System
  "Male reproductive organs": "Testes (produce sperm and testosterone), epididymis (sperm maturation and storage), vas deferens (sperm transport), seminal vesicles and prostate (produce seminal fluid), and penis (copulation). Located mostly outside body for cooler temperature.",
  "Female reproductive organs": "Ovaries (produce eggs and hormones), fallopian tubes/oviducts (fertilization site), uterus (implantation and fetal development), cervix (uterus opening), and vagina (birth canal). Menstrual cycle regulated by FSH, LH, estrogen, and progesterone.",
  "Menstrual cycle": "28-day cycle with four phases: menstrual (days 1-5, shedding of endometrium), follicular (days 1-13, FSH stimulates follicle growth), ovulation (day 14, LH surge releases egg), luteal (days 15-28, corpus luteum produces progesterone to maintain endometrium).",
  "Fertilization": "Union of sperm and egg, typically in the fallopian tube. Of ~300 million sperm, only one fertilizes the egg. Acrosome reaction releases enzymes to penetrate zona pellucida. Cortical reaction prevents polyspermy. Results in diploid zygote.",
  "Pregnancy": "Lasts ~40 weeks (280 days). First trimester: organ formation (organogenesis). Second trimester: growth and movement. Third trimester: maturation of organs. Placenta provides nutrition and gas exchange. Hormones: hCG, progesterone, estrogen, HPL.",

  // Integumentary System
  "Skin layers": "Epidermis (outer): stratified squamous epithelium with keratinocytes, melanocytes, Langerhans cells, Merkel cells. Dermis (inner): connective tissue with blood vessels, nerves, hair follicles, glands. Hypodermis: fat storage and insulation.",
  "Melanin": "Pigment produced by melanocytes in the epidermis. Two types: eumelanin (brown-black) and pheomelanin (yellow-red). Protects DNA from UV radiation. Amount determines skin color. Albinism results from melanin production defects.",
  "Glands": "Sebaceous glands: produce sebum (oil) to lubricate skin and hair, prevent water loss. Sweat glands: eccrine (thermoregulation, all over body) and apocrine (scent, in armpits and groin). Ceruminous glands in ear produce wax.",
  "Wound healing": "Four phases: hemostasis (clotting, minutes), inflammation (neutrophils clean wound, hours-days), proliferation (fibroblasts deposit collagen, granulation tissue, days-weeks), and remodeling (scar maturation and strengthening, months-years).",

  // Lymphatic System
  "Lymph formation": "Interstitial fluid (leaked plasma) enters lymph capillaries through one-way flap valves. Lymph flows through lymphatic vessels, passes through lymph nodes (filtered), and returns to blood via the thoracic duct and right lymphatic duct.",
  "Lymph nodes": "Small bean-shaped organs along lymphatic vessels that filter lymph and mount immune responses. Contain B cells (follicles) and T cells (paracortex). Swell during infection (lymphadenopathy) as immune cells multiply to fight pathogens.",
  "Spleen function": "Largest lymphoid organ. Filters blood (removes old/damaged RBCs), stores platelets and monocytes, produces antibodies, and serves as a blood reservoir. White pulp = immune function; red pulp = blood filtration.",
  "Thymus": "Primary lymphoid organ where T cells mature and undergo selection. Located behind the sternum. Most active in childhood; atrophies with age (thymic involution). T cells learn to distinguish self from non-self here.",
  "Edema": "Swelling caused by excess fluid in tissues. Causes: increased capillary permeability (inflammation), increased capillary pressure (heart failure), decreased plasma proteins (liver disease), or blocked lymphatic drainage (elephantiasis).",

  // Renal Physiology
  "Nephron structure": "Bowman's capsule (surrounds glomerulus) → Proximal Convoluted Tubule (PCT, bulk reabsorption) → Loop of Henle (descending: water permeable; ascending: salt pumping) → Distal Convoluted Tubule (DCT, fine-tuning) → Collecting Duct (final concentration).",
  "Filtration rate": "Glomerular Filtration Rate (GFR) = ~125 mL/min = 180 L/day. Only 1-1.5L becomes urine (99% reabsorbed). GFR regulated by blood pressure, afferent/efferent arteriole constriction, and hormones. Decreased GFR indicates kidney disease.",
  "Hormone regulation": "Kidneys produce: renin (blood pressure regulation via angiotensin), erythropoietin (EPO, stimulates RBC production), and calcitriol (active vitamin D for calcium absorption). They are both endocrine organs and targets of hormones (ADH, aldosterone).",
  "Acid-base balance": "Kidneys maintain blood pH 7.35-7.45 by excreting H⁺ ions, reabsorbing bicarbonate (HCO₃⁻), and producing new bicarbonate. Buffers in blood (bicarbonate, phosphate, protein) provide immediate pH stabilization. Lungs adjust CO₂ for rapid pH changes.",
  "Kidney disorders": "Kidney stones (calcium/uric acid crystals in pelvis), glomerulonephritis (inflammation of glomeruli), chronic kidney disease (progressive loss of function), uremia (waste buildup in blood), and polycystic kidney disease (genetic cysts).",

  // Sensory System
  "Eye structure": "Three layers: sclera/cornea (outer, protection), choroid/ciliary body/iris (middle, blood supply and light control), retina (inner, photoreceptors). Lens focuses light on retina. Aqueous humor (front) and vitreous humor (back) maintain shape.",
  "Ear structure": "Outer ear: pinna + ear canal + tympanic membrane. Middle ear: ossicles (malleus, incus, stapes) amplify vibrations 20×. Inner ear: cochlea (hearing, hair cells convert vibrations to nerve impulses) and vestibular apparatus (balance).",
  "Photoreceptors": "Rods (~120 million): sensitive to dim light, no color vision, peripheral vision. Cones (~6 million): color vision in bright light, three types (red, green, blue). Concentrated in fovea for sharp central vision. Rhodopsin in rods, photopsin in cones.",
  "Mechanoreceptors": "Detect mechanical stimuli: touch (Meissner's corpuscles — light touch, Pacinian — deep pressure), hearing (hair cells in cochlea), balance (hair cells in semicircular canals), and proprioception (muscle spindles, joint receptors).",
  "Chemoreceptors": "Detect chemical stimuli. Taste (gustatory): taste buds detect sweet, salty, sour, bitter, umami. Smell (olfactory): olfactory epithelium in nasal cavity detects volatile chemicals. Internal: carotid body detects blood O₂/CO₂ levels.",

  // Blood
  "Plasma proteins": "Albumin (60%, maintains osmotic pressure), globulins (35%, immune function — immunoglobulins, transport), fibrinogen (4%, blood clotting), and regulatory proteins (hormones, enzymes). Total protein: 6-8 g/dL.",
  "RBC function": "Erythrocytes transport O₂ (via hemoglobin) from lungs to tissues and CO₂ from tissues to lungs. Biconcave disc shape maximizes surface area. No nucleus (more room for hemoglobin). Lifespan: ~120 days. Produced in bone marrow (erythropoiesis).",
  "WBC types": "Granulocytes: neutrophils (60-70%, phagocytosis), eosinophils (2-4%, parasites/allergies), basophils (0.5-1%, histamine). Agranulocytes: lymphocytes (20-25%, adaptive immunity — B and T cells), monocytes (3-8%, differentiate into macrophages).",
  "Clotting mechanism": "Vascular spasm → platelet plug formation (platelets adhere to collagen) → coagulation cascade (intrinsic and extrinsic pathways converge to activate prothrombin → thrombin → fibrinogen → fibrin mesh). Calcium and vitamin K are essential cofactors.",

  // Metabolism
  "BMR": "Basal Metabolic Rate — energy expenditure at rest for basic life functions (breathing, circulation, cell production). Measured in kcal/day. Influenced by age, sex, body composition, thyroid hormones, and genetics. Males typically higher than females.",
  "Catabolism vs anabolism": "Catabolism breaks down complex molecules to simpler ones, releasing energy (glycolysis, β-oxidation, proteolysis). Anabolism builds complex molecules from simpler ones, requiring energy (protein synthesis, gluconeogenesis, lipogenesis). Together = metabolism.",
  "Hormonal regulation": "Insulin (lowers blood glucose — promotes glycogen synthesis, fat storage). Glucagon (raises blood glucose — promotes glycogenolysis, gluconeogenesis). Thyroid hormones (increase metabolic rate). Cortisol (mobilizes energy during stress).",
  "Metabolic disorders": "Diabetes mellitus (glucose regulation), phenylketonuria/PKU (phenylalanine buildup), galactosemia (galactose metabolism), gout (uric acid buildup), obesity (energy imbalance), and metabolic syndrome (cluster of risk factors for heart disease).",

  // Brain
  "Cerebral cortex lobes": "Frontal lobe (planning, personality, motor control, Broca's area for speech). Parietal lobe (sensation, spatial awareness). Temporal lobe (hearing, memory, Wernicke's area for language comprehension). Occipital lobe (vision processing).",
  "Limbic system": "Emotional brain — includes amygdala (fear, aggression), hippocampus (memory formation and spatial navigation), hypothalamus (homeostasis, drives), cingulate cortex (emotional processing), and olfactory bulb (smell linked to memory and emotion).",
  "Neurotransmitters": "Chemical messengers: acetylcholine (muscle contraction, memory), dopamine (reward, motivation), serotonin (mood, sleep), norepinephrine (alertness, fight-or-flight), GABA (inhibitory), glutamate (excitatory), and endorphins (pain relief).",
  "Brain plasticity": "The brain's ability to reorganize by forming new neural connections throughout life. Enables learning, memory, and recovery from injury. Greater in youth but continues in adults. Enhanced by enriched environments, exercise, and learning.",

  // Senses (detailed)
  "Visual defects": "Myopia (nearsightedness — elongated eyeball, corrected by concave lens). Hypermetropia (farsightedness — shortened eyeball, corrected by convex lens). Astigmatism (irregular cornea). Presbyopia (age-related loss of accommodation). Cataracts (cloudy lens).",
  "Organ of Corti": "Sensory organ of hearing in the cochlea. Contains inner hair cells (signal transduction) and outer hair cells (amplification) on the basilar membrane. Sound vibrations deflect stereocilia, opening ion channels and generating nerve impulses.",
  "Taste modalities": "Five basic tastes detected by taste buds on the tongue: sweet (sugars), salty (ions), sour (acids), bitter (toxins), and umami (amino acids, glutamate). Each taste bud has 50-100 receptor cells. Taste combines with smell for flavor perception.",
  "Olfactory receptors": "~400 types of olfactory receptor proteins in the nasal epithelium, each detecting different odorant molecules. Humans can distinguish ~1 trillion different odors. Olfactory signals go directly to the limbic system, linking smell to memory and emotion.",
  "Vestibular system": "Balance organ in the inner ear. Three semicircular canals (rotational movement, filled with endolymph). Utricle and saccule (linear acceleration and gravity, contain otoliths). Hair cells detect movement and send signals to the cerebellum.",

  // REPRODUCTION (New Topics)
  "Four floral whorls": "Calyx (sepals — green, protective), corolla (petals — colored, attract pollinators), androecium (stamens — male, produce pollen), gynoecium (pistils — female, contain ovules). Arranged on the thalamus from outside to inside.",
  "Androecium structure": "Male reproductive whorl consisting of stamens. Each stamen has a filament (stalk) and anther (bilobed, four microsporangia). Anthers produce pollen grains (microspores) through microsporogenesis. Pollen contains two cells: tube cell and generative cell.",
  "Gynoecium structure": "Female reproductive whorl. Pistil has stigma (pollen reception), style (pollen tube passage), and ovary (contains ovules). Ovules contain the embryo sac with 7 cells: egg cell, 2 synergids, 3 antipodals, and central cell with 2 polar nuclei.",
  "Placentation types": "Arrangement of ovules in the ovary: marginal (pea), axile (hibiscus, tomato), parietal (mustard), free central (Dianthus), and basal (sunflower). Determines the pattern of seed arrangement in the fruit.",
  "Floral formula": "Symbolic representation of flower structure. Br = bracteate, K = calyx, C = corolla, A = androecium, G = gynoecium. Numbers show part count. () = fusion, G̅ = superior ovary, G = inferior. Example: ⊕ K₅ C₅ A₅ G(₂).",

  // Pre-fertilisation
  "Bisexual vs unisexual": "Bisexual (hermaphrodite) flowers have both stamens and pistil (rose, lily). Unisexual flowers have only one: staminate (male) or pistillate (female). Monoecious plants have both types (maize). Dioecious plants have one type per plant (papaya).",
  "Microsporogenesis": "Formation of microspores (pollen) in the anther. Pollen mother cells (2n) undergo meiosis to produce tetrads of microspores (n). Each microspore develops into a pollen grain with exine (sporopollenin, resistant) and intine (pectin and cellulose).",
  "Megasporogenesis": "Formation of megaspores in the ovule. Megaspore mother cell (2n) undergoes meiosis to produce 4 megaspores. Three degenerate; one functional megaspore develops into the embryo sac through three mitotic divisions → 7-celled, 8-nucleate structure.",
  "Embryo sac structure": "The female gametophyte (7 cells, 8 nuclei): egg cell + 2 synergids (at micropylar end), 3 antipodal cells (at chalazal end), and central cell with 2 polar nuclei. Synergids have filiform apparatus to guide the pollen tube.",
  "Pollination types": "Self-pollination (autogamy): same flower. Geitonogamy: different flower, same plant (functionally cross). Xenogamy: different plants (true cross). Agents: anemophily (wind), entomophily (insects), hydrophily (water), ornithophily (birds).",
  "Pollen-pistil interaction": "After landing on stigma, compatible pollen absorbs water and germinates. The stigma recognizes self vs foreign pollen (self-incompatibility). Pollen tube grows through style guided by chemotropism toward the ovule.",
  "Self-incompatibility": "Genetic mechanism preventing self-fertilization in bisexual flowers. S-gene system: pollen is rejected if it shares S-alleles with the pistil. Gametophytic SI (based on pollen genotype) or sporophytic SI (based on parent genotype).",
  "Pollen tube growth": "Pollen grain germinates on stigma, tube cell grows through style toward ovule. Generative cell divides into two sperm cells inside the tube. Tube enters ovule through micropyle (porogamy), chalaza (chalazogamy), or integuments (mesogamy).",

  // Double fertilisation
  "Syngamy": "Fusion of one sperm cell with the egg cell to form the diploid zygote (2n). This is true fertilization. The zygote divides repeatedly to form the embryo. In angiosperms, syngamy occurs simultaneously with triple fusion.",
  "Triple fusion": "Fusion of the second sperm cell with the two polar nuclei in the central cell, forming the triploid primary endosperm nucleus (3n). This develops into the endosperm, which nourishes the developing embryo. Unique to angiosperms.",
  "Endosperm types": "Nuclear endosperm: free nuclear divisions without wall formation (coconut water). Cellular endosperm: wall formation after each division (coconut meat). Helobial endosperm: combination of both types (found in monocots like Asphodelus).",
  "Nawaschin discovery": "Sergei Nawaschin discovered double fertilization in 1898 in Lilium and Fritillaria. He observed two sperm cells fusing separately with the egg cell and polar nuclei. This was a groundbreaking discovery unique to flowering plants.",
  "Resource efficiency": "Double fertilization ensures endosperm develops only when an embryo is also formed, conserving the plant's resources. Unlike gymnosperms where the food storage tissue (female gametophyte) develops before fertilization regardless.",

  // Post-fertilisation
  "Embryogenesis": "Development of the embryo from the zygote. The zygote divides asymmetrically into a small apical cell (embryo proper) and large basal cell (suspensor). Through globular, heart, torpedo, and mature stages, the embryo forms cotyledon(s), plumule, and radicle.",
  "Seed structure": "Seed = embryo + seed coat (testa from outer integument, tegmen from inner). Monocot seed: one cotyledon (scutellum), endosperm persistent, coleoptile (shoot sheath), coleorhiza (root sheath). Dicot seed: two cotyledons (often store food), endosperm may be absent.",
  "Fruit development": "After fertilization, the ovary wall develops into the fruit wall (pericarp). True fruits develop from the ovary alone (mango, tomato). False fruits include other floral parts — thalamus (apple), calyx (cashew nut). Pericarp has epicarp, mesocarp, endocarp.",
  "True vs false fruits": "True fruits develop from the ovary: drupe (mango), berry (tomato), capsule (cotton). False/accessory fruits develop from other parts: apple (thalamus), strawberry (thalamus), fig (inflorescence). Aggregate fruits from multiple carpels (raspberry).",
  "Parthenocarpy": "Development of fruit without fertilization, producing seedless fruits. Can be natural (banana) or induced by hormones (gibberellins, auxins). Commercially valuable for seedless grapes, watermelons, and oranges. Distinct from apomixis (seed without fertilization).",

  // Apomixis & Polyembryony
  "Apomixis types": "Seed production without fertilization. Diplospory: embryo sac from megaspore mother cell without meiosis. Apospory: embryo sac from nucellar cells. Adventive embryony: embryos from nucellar tissue or integuments surrounding the embryo sac.",
  "Clonal seeds": "Apomictic seeds produce plants genetically identical to the mother plant (clones). Useful in agriculture for maintaining hybrid vigor across generations without re-crossing. Research aims to introduce apomixis into crop plants like rice and wheat.",
  "Polyembryony": "Occurrence of more than one embryo in a seed. Can arise from cleavage of the zygote, multiple embryo sacs, or adventive embryony from nucellar cells. Common in citrus (orange, lemon). Nucellar embryos are clones of the mother plant.",
  "Adventive embryony": "Embryos developing from cells of the nucellus or integuments rather than from the zygote. These are diploid and genetically identical to the mother plant. Important in citrus breeding and propagation of true-to-type rootstocks.",
  "Agricultural significance": "Apomixis could revolutionize agriculture by fixing hybrid vigor — farmers could save and replant hybrid seeds without losing desirable traits. Currently, hybrid seeds must be purchased each season. Research is ongoing in crops like maize and rice.",
  "Hybrid vigor preservation": "Apomixis preserves heterosis (hybrid vigor) across generations because seeds are clonal. In conventional breeding, hybrid vigor is lost in F2 due to segregation. Apomictic hybrids maintain F1 performance indefinitely.",

  // Human Reproduction - Male
  "Testis structure": "Paired oval organs in the scrotum (2-2.5°C below body temperature for spermatogenesis). Each testis has 250 lobules containing 1-3 seminiferous tubules. Interstitial spaces contain Leydig cells (testosterone). Surrounded by tunica albuginea.",
  "Seminiferous tubules": "Site of sperm production. Lined with Sertoli cells (nourish developing sperm, form blood-testis barrier) and spermatogonia (stem cells). Spermatogenesis proceeds from periphery (spermatogonia) to lumen (mature spermatozoa). ~200 million sperm/day produced.",
  "Spermatogenesis stages": "Spermatogonia (2n) → mitosis → primary spermatocytes (2n) → meiosis I → secondary spermatocytes (n) → meiosis II → spermatids (n) → spermiogenesis (morphological transformation) → spermatozoa (mature sperm). Takes ~64 days.",
  "Sperm structure": "Head: acrosome (enzymes for egg penetration) + haploid nucleus (23 chromosomes). Middle piece: mitochondria spiraled around axoneme (energy for motility). Tail: flagellum for propulsion. Total length: ~60μm. 200-300 million per ejaculation.",
  "Leydig and Sertoli cells": "Leydig cells (interstitial cells): produce testosterone under LH stimulation. Essential for male sexual characteristics and spermatogenesis. Sertoli cells (sustentacular cells): nourish sperm, form blood-testis barrier, produce inhibin (FSH feedback), and secrete ABP.",

  // Human Reproduction - Female
  "Ovary structure": "Paired almond-shaped organs near the kidneys. Outer cortex contains follicles at various stages. Inner medulla has blood vessels and nerves. ~2 million primordial follicles at birth; ~400 mature during reproductive life.",
  "Follicle development": "Primordial follicle → primary follicle (oocyte surrounded by granulosa cells) → secondary follicle (antrum forms, theca layer develops) → Graafian follicle (mature, ready for ovulation). FSH stimulates follicle growth; LH triggers ovulation.",
  "Oogenesis stages": "Oogonia (2n, fetal life) → mitosis → primary oocytes (2n, arrested in prophase I until puberty) → meiosis I at ovulation → secondary oocyte (n) + first polar body → meiosis II completed only upon fertilization → ovum (n) + second polar body.",
  "Uterine layers": "Three layers: perimetrium (outer serous layer), myometrium (thick smooth muscle layer — contractions during labor), and endometrium (inner glandular layer — thickens during menstrual cycle for implantation, shed during menstruation).",
  "Oocyte maturation": "Primary oocyte arrested in prophase I from fetal life until puberty. LH surge triggers resumption of meiosis I → secondary oocyte arrested in metaphase II. Meiosis II completes only when sperm penetrates. Only ~400 oocytes ovulate in a lifetime.",
  "Graafian follicle": "The fully mature ovarian follicle ready for ovulation. Contains the secondary oocyte surrounded by corona radiata and zona pellucida, floating in follicular fluid (antrum). After ovulation, it transforms into the corpus luteum (produces progesterone).",

  // Menstrual Cycle
  "Four phases": "Menstrual phase (days 1-5): endometrium shed. Follicular phase (days 1-13): FSH promotes follicle growth, estrogen rises. Ovulatory phase (day 14): LH surge triggers egg release. Luteal phase (days 15-28): corpus luteum produces progesterone.",
  "Ovulation trigger": "Sudden spike in LH (LH surge) caused by rising estrogen levels from the developing follicle (positive feedback). The surge causes the Graafian follicle to rupture, releasing the secondary oocyte. Occurs around day 14 of a 28-day cycle.",
  "Corpus luteum": "Formed from the remnants of the Graafian follicle after ovulation. Produces progesterone (and some estrogen) to maintain the endometrium. If no pregnancy: degenerates into corpus albicans → progesterone drops → menstruation. If pregnant: maintained by hCG.",
  "hCG role": "Human Chorionic Gonadotropin — produced by the trophoblast after implantation. Maintains the corpus luteum (prevents menstruation). Detected in urine/blood for pregnancy tests. Levels peak at 8-10 weeks, then decline as placenta takes over hormone production.",
  "Menarche and menopause": "Menarche: first menstruation, typically ages 11-13, marking the beginning of reproductive maturity. Menopause: cessation of menstruation, typically ages 45-55, due to declining ovarian follicles and estrogen. Between them: ~35 years of reproductive life.",

  // Fertilisation & Implantation
  "Capacitation": "Biochemical changes sperm undergo in the female reproductive tract (6-7 hours). The glycoprotein coat and seminal proteins are removed, making the sperm membrane more permeable and enabling the acrosome reaction. Essential for fertilization.",
  "Acrosome reaction": "When capacitated sperm contacts the zona pellucida, the acrosome (cap over sperm head) releases enzymes (hyaluronidase, acrosin) that digest through the corona radiata and zona pellucida, allowing sperm to reach and fuse with the egg membrane.",
  "Polyspermy block": "Mechanisms preventing multiple sperm from fertilizing one egg. Fast block: membrane depolarization (within seconds). Slow block: cortical granules release enzymes that harden the zona pellucida (zona reaction), preventing further sperm entry.",
  "Cleavage stages": "Zygote undergoes rapid mitotic divisions without growth. 2-cell → 4-cell → 8-cell → 16-cell (morula) → blastocyst (day 5-6). Inner cell mass (ICM) becomes the embryo. Trophoblast becomes the placenta. Cleavage occurs during transit through the fallopian tube.",
  "Blastocyst formation": "By day 5-6, the morula develops a fluid-filled cavity (blastocoel), becoming a blastocyst. Inner cell mass (embryoblast) will form the embryo. Outer trophoblast will form the placenta. Blastocyst hatches from zona pellucida before implantation.",

  // Pregnancy & Development
  "Implantation timing": "Blastocyst implants in the uterine endometrium 6-7 days after fertilization. Trophoblast cells invade the endometrium, establishing connection with maternal blood supply. Successful implantation requires a receptive endometrium (progesterone-primed, 'window of implantation').",
  "Placenta functions": "Organ connecting mother and fetus via the umbilical cord. Functions: nutrient and oxygen transfer (maternal → fetal blood), waste removal (fetal → maternal), hormone production (hCG, hPL, progesterone, estrogen), and immune barrier (prevents rejection).",
  "Three germ layers": "By week 3, the embryonic disc forms three layers: ectoderm (nervous system, skin, hair), mesoderm (muscles, bones, circulatory system, kidneys), and endoderm (gut lining, liver, pancreas, lungs). All body tissues derive from these three layers.",
  "Fetal milestones": "Week 4: heart beats. Week 8: all major organs present (now called 'fetus'). Week 12: sex distinguishable. Week 16: movements felt. Week 24: lungs start producing surfactant. Week 28: eyes open. Week 37: full term. Week 40: delivery.",
  "hCG and hormones": "hCG maintains corpus luteum (weeks 1-10). Placenta takes over hormone production: progesterone (maintains endometrium, prevents contractions), estrogen (uterine growth), human placental lactogen/hPL (maternal metabolism, breast development).",
  "Umbilical cord": "Connects fetus to placenta. Contains two umbilical arteries (carry deoxygenated blood from fetus to placenta) and one umbilical vein (carries oxygenated, nutrient-rich blood from placenta to fetus). Protected by Wharton's jelly. ~50cm long at birth.",

  // Parturition & Lactation
  "Oxytocin role": "Hormone from the posterior pituitary that stimulates uterine smooth muscle contractions during labor. Works through positive feedback — contractions stimulate more oxytocin release. Also triggers milk ejection reflex (let-down) during breastfeeding.",
  "Three stages of labor": "Stage 1 (dilation): cervix dilates from 0 to 10 cm, contractions intensify (6-12 hours). Stage 2 (expulsion): baby is pushed through the birth canal (30 min-2 hours). Stage 3 (placental): placenta and membranes are delivered (5-30 minutes).",
  "Positive feedback": "In labor: fetal head pushes against cervix → signal to brain → oxytocin released → stronger contractions → more pressure on cervix → more oxytocin. Cycle continues with increasing intensity until delivery. Stops after birth.",
  "Colostrum": "First milk produced in the first few days after birth. Rich in antibodies (IgA), proteins, vitamins, and minerals but low in fat. Provides passive immunity to the newborn, protects against infections, and has a mild laxative effect (clears meconium).",
  "Prolactin and lactation": "Prolactin from the anterior pituitary stimulates milk production in mammary glands. Suckling stimulates prolactin release (positive feedback). Milk production is maintained as long as breastfeeding continues. Also inhibits ovulation initially.",
  "Let-down reflex": "Oxytocin causes contraction of myoepithelial cells around mammary alveoli, ejecting milk into the ducts. Triggered by suckling, baby's cry, or even thinking about the baby. Stress and anxiety can inhibit the reflex.",

  // Reproductive Health
  "Birth control methods": "Natural: rhythm method, withdrawal. Barrier: condoms, diaphragm, cervical cap. Hormonal: pills (estrogen + progesterone), injections (Depo-Provera), implants, patches. IUDs: copper (spermicidal) and hormonal (Mirena). Surgical: vasectomy, tubectomy.",
  "STDs prevention": "Prevention of sexually transmitted diseases: abstinence, mutual monogamy, correct condom use, vaccination (HPV, Hepatitis B), regular screening, avoiding needle sharing, and treating infected partners. Common STDs: HIV, gonorrhea, syphilis, chlamydia, HPV, herpes.",
  "IVF and ART": "In Vitro Fertilization: eggs retrieved after hormonal stimulation, fertilized with sperm in lab, embryo transferred to uterus. Other ART: GIFT (gamete transfer to fallopian tube), ZIFT (zygote transfer), ICSI (single sperm injected into egg), surrogacy.",
  "MTP laws": "Medical Termination of Pregnancy (abortion) regulated by law. In India: MTP Act allows abortion up to 20 weeks (24 weeks in special cases). Must be performed by registered medical practitioner in approved facility. Cannot be used for sex-selective abortion.",
  "Population explosion": "Rapid population growth due to decreased death rates while birth rates remain high. India's population exceeds 1.4 billion. Causes: improved healthcare, low literacy, poverty, early marriage. Solutions: education, family planning, economic development.",
  "RCH programmes": "Reproductive and Child Health programmes aim to: improve maternal health (safe delivery, prenatal care), reduce infant mortality, promote family planning, prevent STDs, ensure immunization, and provide nutrition support. Part of National Health Mission in India.",

  // Genetics - Mendel
  "Seven contrasting characters": "Mendel's seven traits in pea plants: seed shape (round/wrinkled), seed color (yellow/green), flower color (violet/white), flower position (axial/terminal), pod shape (inflated/constricted), pod color (green/yellow), stem height (tall/dwarf).",
  "Law of Dominance": "In a heterozygous organism, only one allele (dominant) expresses its phenotype while the other (recessive) is masked. Example: Tt pea plant appears tall because T (tall) dominates t (dwarf). Recessive traits appear only in homozygous condition (tt).",
  "Law of Segregation": "During gamete formation, the two alleles of a gene separate so each gamete receives only one allele. Also called the law of purity of gametes. Demonstrated by 3:1 phenotypic ratio in F₂ of a monohybrid cross.",
  "Monohybrid cross": "Cross involving one gene/trait. Example: TT (tall) × tt (dwarf) → F₁: all Tt (tall). F₁ × F₁ (Tt × Tt) → F₂: 1 TT : 2 Tt : 1 tt (genotypic ratio 1:2:1, phenotypic ratio 3 tall : 1 dwarf).",
  "3:1 ratio": "The phenotypic ratio in F₂ generation of a monohybrid cross (3 dominant : 1 recessive). Results from Mendelian segregation: Tt × Tt → TT + 2Tt + tt. The 3:1 ratio provided evidence for Mendel's Law of Segregation.",
  "Rediscovery in 1900": "Mendel's work (published 1866) was independently rediscovered in 1900 by three scientists: Hugo de Vries (Netherlands), Carl Correns (Germany), and Erich von Tschermak (Austria). This launched the modern science of genetics.",

  // Inheritance of One Gene
  "Monohybrid ratio 3:1": "In a monohybrid cross (Tt × Tt), F₂ shows 3:1 phenotypic ratio and 1:2:1 genotypic ratio. This occurs because each parent produces two types of gametes (T and t) in equal proportion, and fertilization is random.",
  "Test cross": "Crossing an organism of unknown genotype (dominant phenotype) with a homozygous recessive (tt). If all offspring are dominant → unknown is TT. If 1:1 ratio → unknown is Tt. Used to determine whether an organism is homozygous or heterozygous.",
  "Incomplete dominance": "Neither allele is completely dominant. Heterozygote shows an intermediate phenotype. Example: red (RR) × white (rr) snapdragon → pink (Rr) F₁. F₂ ratio: 1 red : 2 pink : 1 white. Phenotypic and genotypic ratios are identical (1:2:1).",
  "Co-dominance": "Both alleles express equally in the heterozygote — neither is dominant or recessive. Example: ABO blood groups — allele Iᴬ and Iᴮ are codominant (Iᴬ Iᴮ = type AB blood shows both A and B antigens). Different from incomplete dominance (no blending).",
  "ABO blood groups": "Determined by alleles Iᴬ, Iᴮ, and i. Iᴬ and Iᴮ are codominant; both dominant over i. Genotypes: IᴬIᴬ or Iᴬi (type A), IᴮIᴮ or Iᴮi (type B), IᴬIᴮ (type AB), ii (type O). Multiple allelism — three alleles but each person has only two.",
  "Pleiotropy": "A single gene affecting multiple phenotypic traits. Example: sickle cell anemia gene causes abnormal hemoglobin, sickle-shaped RBCs, anemia, and organ damage. Phenylketonuria gene affects both phenylalanine metabolism and melanin production.",

  // Inheritance of Two Genes
  "9:3:3:1 ratio": "Phenotypic ratio in F₂ of a dihybrid cross (two genes, each with dominant and recessive alleles). Example: round yellow × wrinkled green → F₂: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green.",
  "Independent Assortment": "Mendel's second law: genes on different chromosomes segregate independently during gamete formation. A dihybrid (RrYy) produces four gamete types in equal proportions: RY, Ry, rY, ry. Basis for the 9:3:3:1 ratio.",
  "Epistasis types": "One gene masks the expression of another. Recessive epistasis (9:3:4 — Labrador coat color), dominant epistasis (12:3:1), duplicate recessive (9:7), duplicate dominant (15:1), complementary (9:7), and inhibitory (13:3). All are modifications of 9:3:3:1.",
  "Linkage": "Genes on the same chromosome tend to be inherited together (linked). T.H. Morgan discovered linkage in Drosophila. Linked genes don't show independent assortment. Recombination frequency between linked genes < 50%. Complete linkage is rare.",
  "Chromosomal theory": "Proposed by Boveri and Sutton (1902): chromosomes are carriers of genes. Evidence: chromosomes behave like Mendel's factors (pair in diploid, segregate in meiosis, assort independently if on different chromosomes). Confirmed by Morgan's work on Drosophila.",

  // Sex Determination
  "SRY gene": "Sex-determining Region Y — the master switch gene on the Y chromosome that triggers male development. SRY encodes the TDF (Testis Determining Factor) protein. Without SRY, default development is female. Located on the short arm of Y chromosome.",
  "XX-XY system": "Sex determination in humans, most mammals, and Drosophila. Females have two X chromosomes (XX); males have one X and one Y (XY). Males are heterogametic (produce X and Y sperm). Father determines the sex of offspring.",
  "XX-XO system": "Sex determination in some insects (grasshoppers, cockroaches). Females are XX; males have only one X (XO). Males produce two types of sperm: with X and without X. No Y chromosome. Sex determined by sperm type that fertilizes the egg.",
  "ZW-ZZ system": "Sex determination in birds, some reptiles, and butterflies. Males are homogametic (ZZ); females are heterogametic (ZW). Opposite of XX-XY system. DMRT1 gene on Z chromosome plays a role in male development.",
  "Haplodiploidy": "Sex determination in bees, ants, and wasps. Females develop from fertilized eggs (diploid, 2n). Males develop from unfertilized eggs (haploid, n) by parthenogenesis. Queen controls sex by choosing to fertilize eggs or not.",
  "Sex-linked inheritance": "Genes on sex chromosomes show different inheritance patterns in males and females. X-linked recessive traits (color blindness, hemophilia) affect males more because they have only one X. Fathers cannot pass X-linked traits to sons.",

  // Mutations & Genetic Disorders
  "Point mutations": "Changes in a single base pair. Substitutions: transition (purine ↔ purine) or transversion (purine ↔ pyrimidine). Can be silent (no amino acid change), missense (different amino acid), or nonsense (premature stop codon). Sickle cell anemia: A → T in β-globin gene.",
  "Chromosomal disorders": "Caused by changes in chromosome number or structure. Aneuploidy: gain or loss of chromosomes (trisomy 21 = Down syndrome). Structural changes: deletion (cri du chat), duplication, inversion, translocation (chronic myeloid leukemia).",
  "Down syndrome": "Trisomy 21 (47 chromosomes). Caused by non-disjunction during meiosis. Features: intellectual disability, characteristic facial features, heart defects, short stature. Risk increases with maternal age (>35 years). Most common autosomal aneuploidy.",
  "Sickle cell anemia": "Autosomal recessive disorder. Point mutation in β-globin gene (GAG → GUG) changes glutamic acid to valine. Hemoglobin S polymerizes under low O₂, causing RBCs to sickle. Heterozygotes (carriers) have sickle cell trait and malaria resistance.",
  "Hemophilia": "X-linked recessive bleeding disorder. Hemophilia A: deficiency of clotting factor VIII. Hemophilia B: deficiency of factor IX. Affected individuals bleed excessively from minor injuries. Males affected more; females are usually carriers (X^H X^h).",
  "Pedigree analysis": "Analysis of family trees to determine the pattern of inheritance of a trait. Can identify autosomal dominant, autosomal recessive, X-linked dominant, or X-linked recessive patterns. Used in genetic counseling to predict risk in offspring.",

  // Molecular Biology - DNA
  "Watson-Crick model": "James Watson and Francis Crick proposed the double helix structure of DNA in 1953, using X-ray crystallography data from Rosalind Franklin. Two antiparallel polynucleotide strands wind around each other, with bases facing inward.",
  "Base pairing rules": "Adenine pairs with thymine (A=T, 2 hydrogen bonds) and guanine pairs with cytosine (G≡C, 3 hydrogen bonds). Chargaff's rule: A=T and G=C in any DNA molecule. Complementary base pairing ensures accurate replication and transcription.",
  "Antiparallel strands": "The two DNA strands run in opposite directions: one 5'→3' and the other 3'→5'. This antiparallel arrangement is essential for DNA replication (polymerase adds nucleotides only in 5'→3' direction) and base pairing geometry.",
  "Chargaff's rule": "In any DNA molecule: amount of adenine equals thymine (A=T) and guanine equals cytosine (G=C). Therefore, purines (A+G) = pyrimidines (T+C). This ratio is constant within a species but varies between species. Supported Watson-Crick model.",
  "Nucleosome structure": "Basic unit of chromatin. ~146 base pairs of DNA wrapped around a histone octamer (2 each of H2A, H2B, H3, H4). H1 histone links nucleosomes. 'Beads on a string' appearance. Further coiling produces chromatin fiber (30nm) and eventually chromosomes.",
  "DNA packaging": "DNA compaction: naked DNA → nucleosome (11nm beads-on-string) → 30nm chromatin fiber (solenoid) → 300nm looped domains → 700nm condensed chromatin → 1400nm metaphase chromosome. Total compaction: ~10,000-fold. Histones are positively charged (bind negative DNA).",

  // DNA Replication
  "Semi-conservative model": "Each daughter DNA molecule contains one original (parental) strand and one newly synthesized strand. Proposed by Watson and Crick. Proved by Meselson and Stahl (1958) using ¹⁵N-labeled E. coli DNA and CsCl density gradient centrifugation.",
  "Meselson-Stahl experiment": "Grew E. coli in ¹⁵N medium (heavy DNA), then shifted to ¹⁴N medium. After one generation: all DNA was intermediate density (hybrid). After two: half intermediate, half light. Proved semi-conservative replication. One of biology's most elegant experiments.",
  "Leading vs lagging strand": "Leading strand: synthesized continuously in 5'→3' direction toward the replication fork. Lagging strand: synthesized discontinuously in 5'→3' direction away from the fork, forming Okazaki fragments (1000-2000 nucleotides in bacteria, 100-200 in eukaryotes).",
  "Okazaki fragments": "Short DNA segments synthesized on the lagging strand during replication. Each begins with an RNA primer (made by primase). DNA Polymerase I replaces RNA primers with DNA. DNA ligase joins the fragments. Named after Reiji and Tsuneko Okazaki.",
  "DNA polymerase III": "Main replication enzyme in bacteria. Synthesizes new DNA strand 5'→3' using a template. Has 3'→5' exonuclease activity (proofreading). Very processive — can add ~1000 nucleotides/second. Error rate: ~1 in 10⁹ bases with proofreading.",
  "Telomerase": "Enzyme that extends telomeres (TTAGGG repeats) at chromosome ends. Contains an RNA template. Active in germ cells, stem cells, and cancer cells. Inactive in most somatic cells → telomere shortening with each division → cellular aging (Hayflick limit).",

  // Transcription
  "Template vs coding strand": "Template strand (antisense): read 3'→5' by RNA polymerase. Coding strand (sense): has same sequence as mRNA (except T→U). Only the template strand is used for transcription. Different genes may use different strands as template.",
  "RNA polymerase types": "Prokaryotes: single RNA polymerase (5 subunits + σ factor). Eukaryotes: RNA Pol I (rRNA in nucleolus), RNA Pol II (mRNA, pre-cursor of mRNA — most important), RNA Pol III (tRNA, 5S rRNA, snRNA). Each recognizes different promoters.",
  "Promoter sequences": "DNA sequences upstream of a gene that RNA polymerase recognizes and binds. Prokaryotes: -10 (Pribnow box, TATAAT) and -35 sequences. Eukaryotes: TATA box (-25), CAAT box (-75), GC box. Transcription factors help polymerase bind promoters.",
  "Sigma factor": "σ (sigma) factor in prokaryotes: detachable subunit that helps RNA polymerase recognize and bind to specific promoter sequences. Dissociates after transcription initiation. Different σ factors recognize different promoters for gene regulation.",
  "RNA processing": "Eukaryotic pre-mRNA modifications: 5' capping (7-methylguanosine cap — protects from degradation, aids ribosome binding), 3' polyadenylation (poly-A tail of 200+ adenines — stability, export), and splicing (intron removal, exon joining by spliceosomes).",
  "Splicing of introns": "Removal of non-coding sequences (introns) from pre-mRNA and joining of coding sequences (exons). Catalyzed by spliceosomes (snRNPs). Alternative splicing produces different mRNAs from one gene, increasing protein diversity. Some introns are self-splicing (ribozymes).",

  // Genetic Code & Translation
  "Triplet code": "Three consecutive nucleotides (codon) code for one amino acid. 4³ = 64 possible codons for 20 amino acids → genetic code is degenerate (redundant). Code is nearly universal, non-overlapping, and comma-less. Cracked by Nirenberg and Khorana.",
  "64 codons": "61 sense codons code for 20 amino acids. 3 stop codons: UAA (ochre), UAG (amber), UGA (opal) — signal translation termination. AUG is the start codon (methionine/fMet). Wobble hypothesis: third position of codon allows some flexibility in base pairing.",
  "Start and stop codons": "AUG: universal start codon, codes for methionine (Met) in eukaryotes or formyl-methionine (fMet) in prokaryotes. Initiates translation. Stop codons (UAA, UAG, UGA): don't code for any amino acid. Recognized by release factors, not tRNA.",
  "Ribosome sites (A, P, E)": "Three tRNA binding sites: A (aminoacyl) site — incoming charged tRNA binds. P (peptidyl) site — tRNA carrying the growing polypeptide chain. E (exit) site — empty tRNA leaves. Translocation moves ribosome along mRNA by one codon.",
  "Peptidyl transferase": "Enzyme activity that catalyzes peptide bond formation between amino acids during translation. Located in the large ribosomal subunit. Actually a ribozyme — the catalytic activity is in 23S rRNA, not protein. Supports the RNA World hypothesis.",
  "Polyribosomes": "Multiple ribosomes translating the same mRNA simultaneously, each at a different position. Increases efficiency of protein production — one mRNA can produce many protein copies at once. Also called polysomes. Visible as 'beads on a string' in electron microscopy.",

  // Gene Regulation
  "Lac operon": "E. coli operon for lactose metabolism. Contains structural genes: lacZ (β-galactosidase), lacY (permease), lacA (transacetylase), plus promoter, operator, and regulatory gene (lacI). Expressed only when lactose is present and glucose is absent.",
  "Jacob-Monod model": "François Jacob and Jacques Monod proposed the operon concept in 1961 (Nobel Prize 1965). They described how genes are regulated as coordinated units. The lac operon model explained inducible gene expression in prokaryotes.",
  "Repressor protein": "Product of the lacI gene. In the absence of lactose, the repressor binds the operator sequence, physically blocking RNA polymerase from transcribing structural genes. This is negative regulation — default state is OFF.",
  "Inducer (allolactose)": "Allolactose (isomer of lactose) is the true inducer of the lac operon. It binds to the repressor protein, causing a conformational change that releases the repressor from the operator, allowing transcription. Lactose is converted to allolactose by β-galactosidase.",
  "Negative regulation": "Gene expression is turned OFF by a repressor protein binding the operator. The lac operon uses negative inducible regulation: repressor is active by default (genes OFF), inducer inactivates it (genes ON). Opposite is positive regulation by activators.",
  "Eukaryotic regulation levels": "Gene expression regulated at multiple levels: chromatin remodeling (epigenetics), transcriptional (promoters, enhancers, transcription factors), post-transcriptional (splicing, mRNA stability), translational (ribosome binding), and post-translational (protein modification, degradation).",

  // Human Genome Project
  "3.2 billion base pairs": "The human genome contains approximately 3.2 billion base pairs of DNA distributed across 23 pairs of chromosomes. Only ~1.5% codes for proteins. The rest includes regulatory sequences, introns, repetitive sequences, and sequences of unknown function.",
  "20,000-25,000 genes": "The human genome contains approximately 20,000-25,000 protein-coding genes — far fewer than expected (~100,000 predicted). This 'gene number paradox' is explained by alternative splicing, post-translational modifications, and regulatory complexity.",
  "VNTRs and STRs": "Variable Number Tandem Repeats and Short Tandem Repeats — repetitive DNA sequences that vary in number between individuals. Used in DNA fingerprinting because they create unique patterns. STRs (2-6 bp repeats) are preferred for forensic analysis.",
  "Alec Jeffreys": "Sir Alec Jeffreys developed DNA fingerprinting in 1984 at the University of Leicester. He discovered that VNTRs produce individual-specific patterns. First used in immigration case (1985) and criminal case (Colin Pitchfork, 1988).",
  "Forensic applications": "DNA profiling used in criminal investigations (matching suspects to crime scene evidence), paternity testing, identification of disaster victims, immigration disputes, and evolutionary studies. STR analysis with PCR requires very small DNA samples.",
  "Southern blotting": "Technique developed by Edwin Southern (1975). DNA is cut with restriction enzymes, separated by gel electrophoresis, transferred to a membrane, and hybridized with labeled probes. Used in DNA fingerprinting (RFLP analysis) and genetic disease diagnosis.",

  // Evolution
  "Chemical evolution": "Formation of organic molecules from inorganic compounds on early Earth. Stanley Miller and Harold Urey (1953) simulated early Earth conditions and produced amino acids from methane, ammonia, water, and hydrogen using electrical sparks.",
  "Oparin-Haldane hypothesis": "A.I. Oparin (1924) and J.B.S. Haldane (1929) independently proposed that life originated from simple organic molecules in a 'primordial soup.' Early Earth's reducing atmosphere lacked oxygen, allowing organic synthesis from inorganic compounds.",
  "Miller-Urey experiment": "1953 experiment simulating early Earth: mixture of CH₄, NH₃, H₂O, H₂ in a closed apparatus with electrical sparks (lightning). After a week, amino acids (glycine, alanine) and other organic compounds were found. Supported chemical evolution theory.",
  "RNA World": "Hypothesis that RNA was the first self-replicating molecule before DNA and proteins evolved. RNA can store genetic information AND catalyze reactions (ribozymes). Self-splicing introns and ribosomal RNA support this idea. RNA → DNA + Proteins evolved later.",
  "Primordial soup": "The early ocean containing accumulated organic molecules formed by chemical evolution (amino acids, sugars, nucleotides). These concentrated in warm shallow pools, eventually forming protocells — membrane-bound structures capable of growth and division.",
  "Reducing atmosphere": "Early Earth's atmosphere lacked free oxygen and contained reducing gases: methane (CH₄), ammonia (NH₃), hydrogen (H₂), and water vapor. This allowed organic molecules to accumulate without being oxidized. Oxygen appeared later from cyanobacteria photosynthesis.",

  // Evolution Theories
  "Darwin's observations": "During the HMS Beagle voyage (1831-1836), Darwin observed: variation within species, adaptation to local environments (Galápagos finches), fossil sequences showing gradual change, and similarities between related species. Led to the theory of natural selection.",
  "Survival of fittest": "Herbert Spencer's phrase (adopted by Darwin) describing natural selection: organisms with traits best suited to their environment survive and reproduce more successfully. 'Fitness' = reproductive success, not physical strength.",
  "Lamarckism": "Jean-Baptiste Lamarck's theory (1809): organisms acquire new traits during their lifetime (use and disuse of organs) and pass them to offspring (inheritance of acquired characters). Example: giraffes stretching necks. Now disproven by genetics.",
  "Mutation theory": "Hugo de Vries proposed (1901) that new species arise through sudden, large mutations (saltation) rather than gradual changes. Based on his work with evening primrose (Oenothera). Modern synthesis: most evolution is gradual, but mutations provide raw material.",
  "HMS Beagle voyage": "Darwin's 5-year voyage (1831-1836) around South America, Galápagos Islands, Australia, and other locations. His observations of species distribution, fossils, and adaptations provided the evidence base for 'On the Origin of Species' (1859).",

  // Evidence for Evolution
  "Fossil evidence": "Fossils document the history of life: transitional forms (Archaeopteryx — dinosaur to bird, Tiktaalik — fish to tetrapod), sequence of appearance (simple → complex), and extinction events. Radiometric dating provides absolute ages.",
  "Homologous organs": "Structures with similar anatomy but different functions in different species, indicating common ancestry. Examples: forelimbs of human (grasp), whale (swim), bat (fly), horse (run) — same bones (humerus, radius, ulna) in different proportions.",
  "Analogous organs": "Structures with different anatomy but similar functions in unrelated species, arising from convergent evolution. Examples: wings of birds and insects, eyes of octopus and mammals. Show adaptation to similar environments, not common ancestry.",
  "Vestigial organs": "Reduced, non-functional structures inherited from ancestors where they were functional. Examples: human appendix (digestive in herbivores), wisdom teeth, ear muscles, coccyx (tail), whale hind limb bones. Evidence of evolutionary descent with modification.",
  "Molecular evidence": "DNA and protein sequence comparisons reveal evolutionary relationships. More similar sequences = more recent common ancestor. Cytochrome c, hemoglobin, and ribosomal RNA are commonly compared. Molecular clocks estimate divergence times.",
  "Biogeography": "Study of geographic distribution of species. Explains why similar environments have different species (different histories) and why islands have unique species (isolation + adaptation). Continental drift explains distribution of related species on different continents.",

  // Adaptive Radiation
  "Darwin's finches": "14 species of finches on the Galápagos Islands, evolved from a single ancestor. Different beak shapes adapted to different food sources: large beaks for seeds, thin beaks for insects, cactus-probing beaks. Classic example of adaptive radiation.",
  "Australian marsupials": "Diverse marsupial mammals in Australia evolved from a single ancestor after geographic isolation. Kangaroo (grassland), koala (tree), wombat (burrowing), Tasmanian devil (carnivore). Many convergently evolved to resemble placental counterparts elsewhere.",
  "Convergent evolution": "Unrelated species evolve similar traits independently due to similar selection pressures. Examples: streamlined body in dolphins (mammals) and sharks (fish), wings in birds, bats, and insects, camera eyes in vertebrates and cephalopods.",
  "Divergent evolution": "Related species evolve different traits as they adapt to different environments. Produces homologous structures. Example: mammalian forelimbs diversified into human hands, bat wings, whale flippers, and dog legs from a common ancestor.",
  "Ecological niches": "The specific role and position of a species in its ecosystem — what it eats, where it lives, when it's active, and how it interacts with other species. No two species can occupy the same niche indefinitely (competitive exclusion principle).",

  // Mechanisms of Evolution
  "Natural selection types": "Directional selection: favors one extreme (antibiotic resistance). Stabilizing selection: favors the average (human birth weight). Disruptive selection: favors both extremes (beak sizes in seed-eating birds). Acts on phenotypes but changes allele frequencies.",
  "Genetic drift": "Random changes in allele frequencies in small populations, not due to natural selection. Bottleneck effect: population crash reduces genetic diversity. Founder effect: small group colonizes new area with limited gene pool. More significant in small populations.",
  "Hardy-Weinberg principle": "In an ideal population (large, random mating, no mutation/selection/migration), allele frequencies remain constant: p + q = 1 and p² + 2pq + q² = 1. Any deviation indicates evolution is occurring. Used as a null hypothesis to detect evolutionary forces.",
  "Gene flow": "Transfer of alleles between populations through migration. Increases genetic diversity within populations and decreases differences between populations. Can introduce new alleles or change allele frequencies. Prevents populations from diverging into separate species.",
  "Speciation types": "Allopatric: geographic isolation → reproductive isolation → new species (most common). Sympatric: no geographic barrier, reproductive isolation arises within a population (polyploidy in plants). Parapatric: partial geographic separation with some gene flow.",
  "Reproductive isolation": "Mechanisms preventing gene flow between populations. Pre-zygotic: habitat, temporal, behavioral, mechanical, gametic isolation. Post-zygotic: hybrid inviability, hybrid sterility (mule = horse × donkey), hybrid breakdown. Essential for speciation.",

  // Human Evolution
  "Australopithecus": "Early hominins from Africa (~4-2 million years ago). Bipedal walkers with small brains (~400cc). Famous fossil: 'Lucy' (A. afarensis, 3.2 million years old). Likely ancestors of the genus Homo. Combined upright walking with some tree-climbing ability.",
  "Homo habilis": "'Handy man' — first Homo species (~2.4-1.4 million years ago). Brain size ~650cc. Made simple stone tools (Oldowan). Found in East Africa. Marks the beginning of tool use and possibly early language. Transitional between Australopithecus and later Homo.",
  "Homo erectus": "'Upright man' (~1.9 million - 110,000 years ago). Brain size ~900cc. First to leave Africa, use fire, and make hand axes (Acheulean tools). Found in Asia (Java Man, Peking Man) and Africa. Likely ancestors of Homo sapiens.",
  "Neanderthals": "Homo neanderthalensis (~400,000-40,000 years ago). Large brains (~1500cc), stocky build adapted to cold. Used tools, buried dead, possibly had language. Lived in Europe and western Asia. Modern non-African humans have 1-4% Neanderthal DNA from interbreeding.",
  "Out of Africa": "Theory that modern Homo sapiens evolved in Africa (~200,000-300,000 years ago) and migrated out ~70,000 years ago, replacing other human species. Supported by genetic evidence (mitochondrial Eve), fossil record, and linguistic diversity patterns.",
  "Brain size increase": "Hominin brain size tripled over ~3 million years: Australopithecus (~400cc) → H. habilis (~650cc) → H. erectus (~900cc) → H. sapiens (~1400cc). Driven by tool use, social complexity, language, and meat-eating. Trade-off: energy-expensive (20% of body's energy).",

  // Human Health
  "Pathogen types": "Disease-causing organisms: bacteria (cholera, TB), viruses (HIV, influenza), fungi (ringworm, candidiasis), protozoans (malaria, amoebic dysentery), helminths (roundworms, tapeworms), and prions (mad cow disease). Each requires different treatment approaches.",
  "Typhoid and Widal test": "Typhoid fever caused by Salmonella typhi. Transmitted through contaminated food/water. Symptoms: sustained high fever, headache, abdominal pain. Widal test detects antibodies against Salmonella antigens in patient's serum for diagnosis.",
  "Malaria life cycle": "Plasmodium (protozoan) transmitted by female Anopheles mosquito. Sporozoites → liver (schizogony) → merozoites → RBCs (erythrocytic cycle, causes fever) → gametocytes → mosquito (sexual cycle). P. falciparum causes most severe form.",
  "Dengue transmission": "Dengue virus transmitted by Aedes aegypti mosquito. Symptoms: high fever, severe headache, pain behind eyes, muscle/joint pain ('breakbone fever'), rash. Severe form: dengue hemorrhagic fever. No specific treatment; prevention through mosquito control.",
  "Prevention strategies": "Personal hygiene, safe drinking water, proper sewage disposal, vector control (mosquito nets, repellents), vaccination, quarantine of infected individuals, public health education, and maintaining clean surroundings. Prevention is better than cure.",
  "Vector-borne diseases": "Diseases transmitted by arthropod vectors: malaria (Anopheles mosquito), dengue (Aedes), filariasis (Culex mosquito), plague (rat flea), sleeping sickness (tsetse fly), and Chagas disease (kissing bug). Control focuses on eliminating vectors.",

  // Immunity
  "Innate barriers": "First line of defense: physical barriers (skin, mucous membranes), chemical barriers (lysozyme in tears, HCl in stomach, sebum), biological barriers (normal flora compete with pathogens). Second line: phagocytes (neutrophils, macrophages), NK cells, complement, inflammation, fever.",
  "B and T lymphocytes": "B cells: mature in bone marrow, produce antibodies (humoral immunity). T cells: mature in thymus, directly attack infected cells (cell-mediated immunity). Both originate from bone marrow stem cells. Together provide specific, adaptive immune response.",
  "Antibody classes": "IgG (75%, crosses placenta, long-term immunity), IgA (mucosal immunity, breast milk), IgM (first antibody produced, pentamer), IgE (allergies, parasites, activates mast cells), IgD (B cell receptor, poorly understood). Y-shaped proteins with variable antigen-binding sites.",
  "Active vs passive immunity": "Active: body produces own antibodies after exposure to antigen (natural — infection, or artificial — vaccination). Lasts long, has memory. Passive: pre-formed antibodies received (natural — maternal antibodies via placenta/milk, or artificial — antiserum injection). Short-lived, no memory.",
  "Vaccination principle": "Introduce weakened/killed pathogen or its antigens to stimulate primary immune response and memory cell formation without causing disease. Upon real infection, memory cells mount rapid, strong secondary response. Basis of herd immunity when enough population is vaccinated.",
  "Immune memory": "After first exposure to an antigen, memory B and T cells persist for years/decades. Upon re-exposure, they mount a secondary immune response that is faster (1-2 days vs 5-7 days), stronger (higher antibody levels), and longer-lasting than the primary response.",

  // AIDS & Cancer
  "HIV structure": "Human Immunodeficiency Virus: enveloped retrovirus with two copies of single-stranded RNA, reverse transcriptase, integrase, and protease enzymes. Surface glycoproteins gp120 and gp41 bind CD4 receptors on T helper cells. Belongs to Lentivirus genus.",
  "Reverse transcriptase": "Enzyme unique to retroviruses that synthesizes DNA from an RNA template (reverse of normal transcription). HIV uses it to convert its RNA genome into double-stranded DNA, which integrates into the host genome (provirus) using integrase enzyme.",
  "CD4+ T cell destruction": "HIV primarily infects CD4+ T helper cells. The virus replicates inside them, eventually killing them. As CD4 count drops below 200 cells/μL (normal: 800-1200), the immune system collapses → opportunistic infections → AIDS (Acquired Immunodeficiency Syndrome).",
  "Oncogenes": "Mutated proto-oncogenes that promote uncontrolled cell growth. Proto-oncogenes normally regulate cell growth and division. Mutations (gain of function) make them constitutively active. Examples: ras, myc, HER2. One mutant copy is sufficient (dominant).",
  "Tumor suppressors": "Genes that normally inhibit cell division or promote apoptosis. Loss of function mutations → uncontrolled growth. Both copies must be mutated (recessive). Examples: p53 (guardian of genome), RB (retinoblastoma), BRCA1/2 (breast cancer). Knudson's two-hit hypothesis.",
  "Metastasis": "Spread of cancer cells from the primary tumor to distant sites via blood or lymphatic vessels. Cancer cells detach, invade surrounding tissue, enter circulation, and establish secondary tumors. Makes cancer difficult to treat. Distinguishes malignant from benign tumors.",

  // Drugs & Alcohol
  "Opioid effects": "Opioids (morphine, heroin, codeine) bind to opioid receptors in the brain, mimicking endorphins. Effects: pain relief, euphoria, sedation, respiratory depression. Highly addictive — tolerance develops rapidly. Overdose can be fatal (reversed by naloxone).",
  "Cannabinoids": "Active compounds in marijuana (Cannabis sativa). THC binds cannabinoid receptors in the brain. Effects: relaxation, altered perception, increased appetite, impaired memory and coordination. Long-term use: psychological dependence, respiratory issues, cognitive effects.",
  "Alcohol and liver": "Ethanol metabolized in the liver by alcohol dehydrogenase → acetaldehyde (toxic) → acetic acid. Chronic alcohol abuse causes fatty liver → alcoholic hepatitis → cirrhosis (irreversible scarring). Also damages brain, heart, pancreas, and immune system.",
  "Adolescent vulnerability": "Adolescents are more susceptible to substance abuse due to peer pressure, curiosity, emotional stress, and a developing prefrontal cortex (poor impulse control). Early drug use increases addiction risk. Brain development continues until age 25.",
  "Addiction mechanism": "Drugs alter brain reward pathways (dopamine system). Repeated use → tolerance (need more for same effect) → dependence (withdrawal symptoms without drug) → compulsive use despite harm. Neuroplastic changes make addiction a chronic brain disorder.",

  // Biotechnology Applications
  "Antibiotic production": "Antibiotics are produced commercially by microorganisms in large fermenters. Penicillin from Penicillium notatum, streptomycin from Streptomyces griseus. Production involves strain improvement, optimal growth conditions, and downstream processing (extraction, purification).",
  "Biogas from methanogens": "Methanogens (Methanobacterium, Methanococcus) produce methane through anaerobic digestion of organic waste. Process: hydrolysis → acidogenesis → acetogenesis → methanogenesis. Biogas (60-70% CH₄) is a renewable energy source. Used in gobar gas plants.",
  "BOD": "Biochemical Oxygen Demand — the amount of dissolved oxygen consumed by microorganisms to decompose organic matter in water. High BOD indicates high organic pollution. Clean water: BOD < 3 mg/L. Sewage: BOD = 100-400 mg/L. Used to assess water quality.",
  "Industrial enzymes": "Enzymes produced by microorganisms for industrial use: lipases (detergents), proteases (leather processing), amylases (starch processing), pectinases (juice clarification), and cellulases (textile processing). Biotechnology produces these at scale using fermentation.",

  // Biocontrol & Biofertilizers
  "Bt toxin mechanism": "Bacillus thuringiensis produces crystal proteins (Cry proteins) toxic to specific insect larvae. When ingested, the protein is activated by alkaline gut pH, binds to receptors on gut epithelium, creates pores → cell lysis → insect death. Harmless to mammals.",
  "Ladybird beetles": "Important biocontrol agents that feed on aphids and other small pests. A single ladybird can eat 5,000 aphids in its lifetime. Used in integrated pest management as an alternative to chemical pesticides in gardens and agricultural fields.",
  "Trichoderma": "Fungal biocontrol agent that parasitizes plant pathogenic fungi. Produces antifungal compounds and enzymes that degrade pathogen cell walls. Used to control root diseases (Fusarium, Rhizoctonia). Also promotes plant growth and induces systemic resistance.",
  "Rhizobium": "Nitrogen-fixing bacteria that form symbiotic relationships with legume roots (peas, beans, soybeans). Bacteria fix atmospheric N₂ into NH₃ using nitrogenase enzyme. Plants provide carbon compounds in return. Important biofertilizer reducing need for synthetic nitrogen.",
  "Cyanobacteria": "Blue-green algae (Anabaena, Nostoc) that fix atmospheric nitrogen in paddy fields. Heterocysts (specialized cells) provide anaerobic conditions for nitrogenase. Also used in Azolla-Anabaena association — the fern Azolla hosts Anabaena for rice field biofertilization.",

  // Biotechnology in Agriculture & Medicine
  "Recombinant DNA technology": "Combining DNA from different sources. Steps: isolation of gene → insertion into vector (plasmid) using restriction enzymes and ligase → transformation into host (E. coli) → selection of recombinants → expression of desired protein. Foundation of genetic engineering.",
  "Golden Rice": "Genetically modified rice containing genes for β-carotene (pro-vitamin A) biosynthesis from daffodil and Erwinia bacteria. Developed to combat vitamin A deficiency (causing blindness in ~250,000 children/year). Golden Rice 2 has higher β-carotene levels.",
  "Gene therapy": "Treating genetic diseases by introducing functional copies of defective genes into patient's cells. Somatic gene therapy: treats the patient (not inherited). Germline therapy: affects future generations (controversial). First success: ADA-SCID treatment (1990).",
  "PCR": "Polymerase Chain Reaction — technique to amplify specific DNA sequences millions of times. Steps (repeated 25-35 cycles): denaturation (95°C), annealing (50-60°C, primers bind), extension (72°C, Taq polymerase synthesizes). Invented by Kary Mullis (Nobel Prize 1993).",
  "ELISA": "Enzyme-Linked Immunosorbent Assay — diagnostic technique using antibody-antigen interaction. Enzyme-linked antibodies produce a color change when substrate is added. Used to detect HIV antibodies, pregnancy (hCG), allergens, and various diseases. Highly sensitive and specific.",

  // Transgenic Animals & Ethics
  "Transgenic mice": "Mice with foreign genes introduced into their genome. Used as models for human diseases (cancer, cystic fibrosis, Alzheimer's). 'Knockout mice' have specific genes disabled to study gene function. Essential for drug testing and gene therapy research.",
  "Pharming": "Using transgenic animals to produce pharmaceutical proteins in their milk. Examples: goats producing antithrombin (ATryn — first FDA-approved pharmed drug), cows producing human lactoferrin. More efficient and cheaper than traditional pharmaceutical production.",
  "Rosie the cow": "First transgenic cow (1997) that produced human alpha-lactalbumin-enriched milk, more nutritious for human infants. Demonstrated the potential of transgenic animals for producing improved dairy products and pharmaceutical proteins.",
  "GMO ethics": "Ethical concerns: environmental impact (gene flow to wild species, superweeds), food safety (allergenicity, long-term health effects), biodiversity loss, corporate control of food supply, and animal welfare. Balanced by benefits: increased food production, nutritional improvement.",
  "Biopiracy": "Unauthorized use of traditional biological resources and knowledge by corporations/organizations, often from developing countries. Examples: patenting of neem, turmeric, and basmati rice by foreign companies. Convention on Biological Diversity addresses benefit-sharing.",
  "GEAC regulation": "Genetic Engineering Appraisal Committee (India) — regulatory body under the Ministry of Environment. Reviews and approves: research proposals involving GMOs, large-scale use, environmental release of transgenic organisms, and import of GMOs for research.",

  // Ecology - Population
  "Population density": "Number of individuals per unit area or volume. Methods of estimation: quadrat method (plants), mark-recapture (mobile animals), line transect. Affected by natality (births), mortality (deaths), immigration, and emigration.",
  "Exponential vs logistic growth": "Exponential (J-curve): unlimited resources, dN/dt = rN, population grows without limit. Logistic (S-curve): limited resources, dN/dt = rN(K-N)/K, growth slows as population approaches carrying capacity (K). S-curve has lag, log, and stationary phases.",
  "Carrying capacity (K)": "Maximum population size an environment can sustain indefinitely with available resources (food, water, space, shelter). Population growth slows as it approaches K due to increased competition, predation, and disease. K varies with environmental conditions.",
  "Mutualism": "Both species benefit from the interaction. Obligate mutualism: species cannot survive without each other (mycorrhizae, lichen = fungus + alga). Facultative mutualism: both benefit but can survive independently (flowers and pollinators, oxpecker and rhinoceros).",
  "Predation": "One organism (predator) kills and eats another (prey). Regulates prey population, drives natural selection (prey evolve defenses, predators evolve better hunting). Lotka-Volterra model describes predator-prey population oscillations.",
  "Competitive exclusion": "Gause's principle: two species competing for the same resources cannot coexist indefinitely — one will outcompete the other. Coexistence requires niche differentiation (resource partitioning). Demonstrated by Gause using Paramecium species.",

  // Ecosystem Structure
  "Biotic and abiotic components": "Biotic: living components — producers (plants), consumers (animals), decomposers (fungi, bacteria). Abiotic: non-living components — light, temperature, water, soil, minerals, pH, humidity. Interactions between them drive ecosystem processes.",
  "GPP and NPP": "Gross Primary Productivity (GPP): total energy fixed by photosynthesis. Net Primary Productivity (NPP) = GPP - respiration losses. NPP represents the energy available for consumers. Tropical forests have highest NPP; deserts and open oceans have lowest.",
  "10% energy transfer": "Only about 10% of energy at one trophic level is transferred to the next (Lindeman's 10% law). The rest is lost as heat through respiration, or remains in undigested material and dead organisms. Limits food chains to 3-5 trophic levels.",
  "Lindeman's law": "Raymond Lindeman (1942) proposed the 10% law of energy transfer: only ~10% of energy is passed from one trophic level to the next. Based on his study of Cedar Bog Lake ecosystem. Explains why top predators are rare and food chains are short.",

  // Decomposition
  "Detritus": "Dead organic matter including fallen leaves, dead animals, feces, and other waste. Detritivores (earthworms, millipedes) physically break down detritus. Decomposers (bacteria, fungi) chemically break it down, recycling nutrients back to the soil.",
  "Fragmentation": "Physical breakdown of detritus into smaller pieces by detritivores (earthworms, woodlice, termites). Increases surface area for microbial decomposition. First step in the decomposition process. Without it, decomposition would be much slower.",
  "Catabolism": "Enzymatic breakdown of organic compounds by decomposers. Bacteria and fungi secrete extracellular enzymes that break down complex molecules (cellulose, proteins, lipids) into simpler compounds (sugars, amino acids, fatty acids) that can be absorbed.",
  "Humification": "Formation of humus — dark, amorphous, resistant organic substance in soil. Humus is highly resistant to further decomposition and accumulates in soil. It improves soil structure, water retention, nutrient-holding capacity, and supports soil organisms.",
  "Mineralization": "Release of inorganic nutrients (NO₃⁻, PO₄³⁻, K⁺, Ca²⁺) from organic matter by decomposers. These minerals become available for plant uptake, completing nutrient cycling. Rate depends on temperature, moisture, pH, oxygen, and chemical composition of detritus.",
  "Factors affecting rate": "Decomposition rate affected by: temperature (warm = faster), moisture (optimal moisture needed), oxygen (aerobic faster than anaerobic), pH (neutral optimal), nitrogen content of substrate (high N = faster), and the chemical nature of detritus (lignin decomposes slowly).",

  // Energy Flow & Pyramids
  "Food chains vs webs": "Food chain: linear sequence of energy transfer (grass → grasshopper → frog → snake → eagle). Food web: interconnected food chains in an ecosystem, showing multiple feeding relationships. Webs are more realistic and stable than individual chains.",
  "Grazing vs detritus chains": "Grazing food chain: starts with living plants (producers → herbivores → carnivores). Detritus food chain: starts with dead organic matter (detritus → detritivores → predators). In most ecosystems, detritus chain handles more energy than grazing chain.",
  "10% rule": "Only ~10% of energy at each trophic level passes to the next. If producers fix 10,000 J, primary consumers get 1,000 J, secondary consumers 100 J, tertiary consumers 10 J. This massive energy loss limits the number of trophic levels.",
  "Three types of pyramids": "Pyramid of numbers (count of organisms — can be inverted in tree ecosystems), pyramid of biomass (total weight — usually upright, inverted in aquatic), and pyramid of energy (energy flow — always upright, never inverted because of second law of thermodynamics).",
  "Standing crop": "The total biomass of living organisms present in an ecosystem at any given time. Measured in g/m² or kcal/m². Different from productivity (rate of biomass production). Standing crop at each trophic level decreases from producers to top consumers.",
  "Trophic efficiency": "Percentage of energy transferred from one trophic level to the next. Typically 5-20% (average 10%). Varies by organism: endotherms have lower trophic efficiency than ectotherms (more energy lost to heat). Determines ecosystem productivity and food chain length.",
};
