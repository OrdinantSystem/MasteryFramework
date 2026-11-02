"""English teaching text adapted from the four supplied video transcripts.

Each lesson is a single scrolling page. Shared diagrams and the retained
revision sheet remain separate from these explanations.
"""
import html


def scrolling_lesson(sections, related_url, related_title):
    """A continuous lesson with descriptive headings and all sections visible."""
    body = ''.join(
        f'<section class="lesson-section" id="lesson-step-{i}" '
        f'aria-labelledby="lesson-title-{i}">'
        f'<h2 id="lesson-title-{i}">{html.escape(title)}</h2>{content}</section>'
        for i, (title, content) in enumerate(sections)
    )
    return (
        '<article class="lesson-article">' + body + '</article>'
        '<div class="related">'
        f'<a href="{related_url}"><span>Related lesson: {html.escape(related_title)}</span><b>↗</b></a>'
        '<a href="revision.html"><span>Review the main ideas</span><b>↗</b></a></div>'
    )


def render_lessons(u):
    write, heading, lesson, panel = u.write, u.heading, u.lesson, u.panel
    chain, details, exercise, links = u.chain, u.details, u.exercise, u.links

    def p(text):
        return '<div class="teaching-copy">' + text + '</div>'

    def example(title, text):
        return f'<div class="worked-explanation"><span class="eyebrow">LET’S WALK THROUGH IT</span><h3>{title}</h3>{text}</div>'

    def source(text):
        return '<div class="lesson-source">' + details(
            'About this explanation',
            f'<p>{text}</p><p>The lessons paraphrase the supplied transcripts in English. Their examples are about learning itself. '
            'The speaker’s ratings and anecdotes are not treated as proof that a method always works.</p>'
            '<a class="text-link" href="library.html">Read the source transcripts →</a>'
        ) + '</div>'

    def page(key, title, label, intro, steps, next_url, next_title, attribution):
        write(key, title, heading(label, title, intro) +
              scrolling_lesson(steps, next_url, next_title) + source(attribution))

    # Home is an entrance to the lessons, not another set of explanations.
    home = '<section class="home-hero"><div><div class="eyebrow">LEARNING HOW TO LEARN</div>'
    home += '<h1>How learning works.<br><em>How to practise it.</em></h1>'
    home += '<p>If you have ever read a page, understood it, and then struggled to explain it, start here. '
    home += 'We will work through what to do while studying, using the ideas about learning on this site as our examples.</p>'
    home += '<div class="actions"><a class="button" href="learning.html">Begin the first lesson →</a>'
    home += '<a class="text-link" href="revision.html">Open the revision sheet</a></div></div>'
    home += '<div class="hero-map">' + u.mini_network() + '<span class="diagram-caption">You can return to this map as the ideas become familiar.</span></div></section>'
    home += p('<p><strong>You do not need to learn every technique at once.</strong> Start with the first lesson, then try one method. '
              'Each lesson explains the idea, walks through an example, and gives you something small to try. '
              'Use the revision sheet afterward to bring the ideas back to mind.</p>')
    home += '<div class="section-intro"><div><span class="eyebrow">WHEN YOU WANT A PARTICULAR METHOD</span><h2>Choose a lesson</h2></div></div>' + u.method_cards()
    home += links([('bloom.html', 'Bloom’s taxonomy: different ways to think'),
                   ('ai.html', 'Use AI as a tutor'),
                   ('cycle.html', 'Put the methods together')])
    write('index', 'Learn the study methods', home)

    page('learning', 'Why understanding a page is only the beginning',
         'START HERE',
         'Let’s begin with a familiar experience, before introducing the study methods.',
         [
             ('It made sense while I was reading', p(
                 '<p>You finish an explanation and think, “Yes, I understand that.” Then someone asks you to explain it, '
                 'and you cannot quite find the words. Or you remember the definition but do not know when to use it.</p>'
                 '<p>That does not mean the reading was pointless. It means you have checked one thing—whether you can follow an explanation—'
                 'but have not yet checked whether you can produce or use the idea yourself.</p>'
                 '<p>This is where the methods in these lessons come in. They give you ways to work with what you read.</p>') +
              panel('Three experiences you may recognize', chain([
                  ('Follow it', 'the explanation is in front of you'),
                  ('Explain it', 'you supply the words and reasons'),
                  ('Use it', 'you decide what fits a new situation')]))),
             ('Give the information a purpose', p(
                 '<p>Suppose your question is: <strong>“Why do I forget something that seemed clear yesterday?”</strong> '
                 'Now the advice you read has a job to do. You want to find a way to check your memory, correct gaps, and come back later.</p>'
                 '<p>A question like this helps you decide which details matter. You can still read a definition or ask for an explanation first. '
                 'You do not have to solve an unfamiliar problem before anyone has taught you the basics.</p>') +
              example('Three ideas that fit the question',
                      '<p><strong>Recall</strong> means bringing something to mind. <strong>Feedback</strong> tells you what was right or missing. '
                      '<strong>Spacing</strong> means returning after a gap. For now, those plain meanings are enough.</p>')),
             ('Learn the words by doing something with them', p(
                 '<p>Here is a study activity: <strong>read a short explanation, look away, and say what you remember.</strong> '
                 'Then look back and check. Trying to remember before seeing the answer is called <strong>retrieval practice</strong>, '
                 'or <strong>active recall</strong>. The two names refer to the same basic action here.</p>'
                 '<p>If you also try again tomorrow, you have added spacing. One idea describes what you do; the other describes when you do it.</p>') +
              exercise('Look away. How would you explain recall and spacing to someone who has not heard either term?',
                       '<p>You might say: “Recall is trying to remember without looking. Spacing is leaving a gap before practising again. '
                       'I can combine them by explaining this today and trying again tomorrow.” You do not need the exact wording, but the distinction should be clear.</p>')),
             ('Start with one manageable change', p(
                 '<p>In your next study session, read one short section. Close it and explain the main point. Check what you missed. '
                 'That is enough for a first attempt; you do not need an elaborate system.</p>'
                 '<p>As you continue, we will add ways to connect ideas, explain their reasoning, choose between similar methods, and review later. '
                 'These are different jobs. A difficulty with remembering may need a different response from a difficulty with understanding a relationship.</p>') +
              exercise('What is one thing you could do after reading the next lesson?',
                       '<p>Try explaining its main idea before reopening it. If the explanation has a gap, return to that part. '
                       'Later, check whether you can still explain it.</p>'))
         ], 'methods.html', 'Meet the four methods',
         'Based on the transcripts’ distinction between recognizing information, explaining it, and using it, and their advice to begin with a meaningful question.')

    methods = heading('THE FOUR METHODS', 'Which part of learning does each method help with?',
                      'Here is the overview. You can return to it after trying the individual lessons.')
    methods += p('<p>Imagine learning these study methods for the first time. You want to know what they mean, '
                 'how they relate, which one fits a difficulty, and whether you will remember them next week.</p>'
                 '<p>Each of the four methods gives you a way to work on part of that problem.</p>')
    methods += u.method_cards()
    methods += panel('The same material, four different activities', chain([
        ('Mind mapping', 'explain how the ideas connect'),
        ('Feynman', 'teach the idea in your own words'),
        ('Interleaving', 'compare and choose between ideas'),
        ('Flashcards + spacing', 'recall important details later')]))
    methods += p('<p><strong>You do not have to perform all four every time.</strong> If you are unsure how two ideas relate, '
                 'make a small map or explain the difference. If the idea was clear but you have forgotten it, try recall after a gap. '
                 'The useful question is what you need to practise, not which technique has the most impressive name.</p>')
    methods += links([('mapping.html', 'Begin with mind mapping'),
                      ('study-habits.html', 'What about highlighting, rereading, blurting, and Cornell notes?')])
    methods += details('What do the transcripts mean by “S-tier”?',
                       '<p>It is the speaker’s way of rating techniques, not a scientific grade. He rates mind mapping highly '
                       'when it involves working out relationships, Feynman highly when the explanation receives reliable feedback, '
                       'and his comparison-focused form of interleaving highly when it tests ideas from different angles. '
                       'The important part of each claim is what the learner actually does.</p>')
    write('methods', 'The four study methods', methods)

    weak = u.svg(''.join(f'<path class="edge" d="M440 190 {x} {y}"/>' for x, y in
                        [(160, 70), (700, 70), (100, 300), (760, 300), (440, 345)]) +
                 ''.join(u.node(x-90, y-38, 180, t) for x, y, t in
                         [(160, 70, 'Memory'), (700, 70, 'Questions'), (100, 300, 'Notes'),
                          (760, 300, 'Feedback'), (440, 345, 'Review')]) +
                 u.node(310, 152, 260, 'Retrieval practice', 'related words', tone='recall'),
                 'A map lists related words but leaves the relationships unexplained.', '0 0 880 410')
    map_diagram = panel('Compare the two maps',
        '<div class="map-toggle" role="group" aria-label="Map comparison">'
        '<button data-map="weak" aria-pressed="false">Related words</button>'
        '<button data-map="strong" aria-pressed="true">Explained relationships</button></div>'
        '<div id="strong-map">' + u.concept_map() + '</div><div id="weak-map" hidden>' + weak +
        '</div><p class="interaction-caption" id="map-caption">Each arrow states a relationship you can explain and check.</p>')
    page('mapping', 'Mind mapping: work out how the ideas fit',
         'METHOD 01', 'A mind map puts your thinking on the page so you can examine and rearrange it.',
         [
             ('What is the map for?', p(
                 '<p>When a topic is new, you may recognize several terms without knowing how they belong together. '
                 'A mind map gives you somewhere to lay out that confusion and work on it.</p>'
                 '<p>Write down a few important ideas. Then ask: which one explains another? Which ideas belong together? '
                 'Where is there a difference I keep missing? Drawing is useful because you can see and change your arrangement.</p>'
                 '<p>The learning happens while you make those decisions. The finished diagram is a record of the thinking.</p>')),
             ('A line should say something', p(
                 '<p>Let’s use retrieval practice as the topic. “Memory,” “questions,” and “feedback” are related words. '
                 'But joining them with lines leaves a question unanswered: <em>how</em> are they related?</p>'
                 '<p>Now make the link more specific. Answering without notes <strong>can reveal</strong> what you could not remember. '
                 'Checking the answer <strong>helps you correct</strong> that gap. You can explain each connection as a sentence.</p>') +
              map_diagram),
             ('Build a small map of your own', p(
                 '<p>Start with three ideas you have met: <strong>recall, feedback, and spacing.</strong> '
                 'Put recall where you have room to add connections.</p>'
                 '<p>Link recall to feedback and write what the link means. Then add spacing. Ask what changes when '
                 'you try recalling on another day instead of repeating everything in one sitting.</p>'
                 '<p>If you cannot explain a connection, leave it as a question and check the lesson. Rearranging a first attempt is part of the work.</p>') +
              example('One possible connection',
                      '<p>“Recall can be repeated after a gap.” That links the activity to its timing. '
                      '“Feedback helps correct what recall exposed.” That explains why checking belongs in the process.</p>')),
             ('Check the thinking behind the picture', p(
                 '<p>Look away from the map. Explain two of its connections without pointing to the boxes. '
                 'Then return and check whether your labels said what you meant.</p>'
                 '<p>Next ask which connection matters most for your question. If you are asking why you forget later, '
                 'spacing deserves attention. If you are asking why a remembered answer is wrong, checking and correction matter more.</p>') +
              exercise('Why would copying a neat map be different from making and explaining your own?',
                       '<p>Copying can give you a useful reference, but it does not show that you worked out the relationships. '
                       'Explaining why a link belongs there, or rebuilding it without looking, checks that part of your understanding.</p>'))
         ], 'feynman.html', 'The Feynman technique',
         'Adapted from the study-techniques transcript, especially the mind-mapping section at 6:01–8:58. '
         'The lesson keeps its focus on comparing, organizing, and explaining relationships, without adopting its guarantee that a technique works every time.')

    page('feynman', 'The Feynman technique: teach the idea simply',
         'METHOD 02', 'Try explaining one idea to someone who has never studied it. Notice where the explanation becomes difficult.',
         [
             ('Why explain it to a beginner?', p(
                 '<p>A beginner cannot fill in the parts you leave out. If you say “use spaced retrieval,” they might ask, '
                 '“What does that mean? What would I actually do?” To answer, you have to find the meaning behind the term.</p>'
                 '<p>This is the basic idea of the Feynman technique. Choose a small topic and explain it in ordinary language. '
                 'You can speak or write; the important part is deciding what needs explaining and why each part follows.</p>'
                 '<p>Begin with an idea you have read about. Then put the source aside for your explanation, so you can notice what you can produce yourself.</p>')),
             ('Walk through an explanation', example('Explaining spacing',
                 '<p>A first attempt might be: “Spacing means repeating things until they stick.” '
                 'That tells the listener to repeat, but misses what makes the practice spaced.</p>'
                 '<p>Try this instead: “After learning something, leave a gap before practising it again. '
                 'For example, explain the idea today and try explaining it tomorrow before you look at your notes. '
                 'Then check what you missed.”</p>'
                 '<p>The example makes the action visible. It also separates spacing—the timing—from recall—the attempt to remember.</p>') +
              p('<p>Simple language should make an explanation easier to follow without changing its meaning.</p>')),
             ('What to do when you get stuck', p(
                 '<p>You might hesitate over a word, lose the reasoning, or realize your example does not fit. '
                 'Pause there. That is the part worth investigating.</p>'
                 '<p>Return to the relevant passage or ask a tutor a specific question. Once the missing part is clearer, '
                 'put the explanation away and try again. You do not need to reread the entire topic after every small gap.</p>'
                 '<p>There is one difficulty: a beginner can give a confident explanation that is wrong. '
                 'A knowledgeable person, a trusted source, or a carefully checked AI response can help you evaluate it.</p>') +
              u.feynman_loop()),
             ('Try teaching one idea', exercise(
                 'Explain retrieval practice to a person who has never heard the term. Include an example and one common mistake.',
                 '<p>You could say: “Read a question, try to answer without looking, then check the answer. '
                 'For example, close this lesson and explain spacing. Looking at the answer first and thinking it looks familiar skips the attempt to remember.”</p>'
                 '<p>Compare the meaning with your own explanation; do not worry about matching the wording. '
                 'Then try explaining the difference between retrieval and spacing without copying this answer.</p>') +
              p('<p>Ask for feedback on accuracy and missing reasoning. A useful response tells you exactly what to change, '
                 'rather than only saying the explanation was good or bad.</p>'))
         ], 'interleaving.html', 'Interleaving',
         'Adapted from the Feynman section of the study-techniques transcript at 9:04–10:57 and the Spanish transcripts’ question about teaching a complete beginner.')

    mixed_question = panel('Try choosing a response',
        '<div class="question-demo"><span class="pill">A STUDY SITUATION</span>'
        '<h3>You can explain spacing today, but cannot remember it a week later. What would you try first?</h3>'
        '<p>Choose an answer, then compare the reason with your own.</p><div class="answer-buttons">'
        '<button data-answer="mapping">Draw a more detailed map</button>'
        '<button data-answer="explaining">Explain it once more today</button>'
        '<button data-answer="recall">Recall it on separate days</button></div>'
        '<div id="practice-feedback" class="interaction-answer" aria-live="polite">Choose an answer to see the feedback.</div></div>')
    page('interleaving', 'Interleaving: practise telling ideas apart',
         'METHOD 03', 'Once you know the basics of a few related ideas, mix the questions instead of practising only one type at a time.',
         [
             ('Why mix the questions?', p(
                 '<p>If every question tells you to make a mind map, you never have to decide whether a map would help. '
                 'You only practise making one. A new situation asks something more: which approach would fit, and why?</p>'
                 '<p>Interleaving means mixing related topics or question types during practice. '
                 'The change of question gives you a reason to notice the differences between them.</p>'
                 '<p>First learn enough about each idea to make a reasonable attempt. Mixing everything while every term is still unfamiliar can make the task needlessly confusing.</p>')),
             ('Compare the practice patterns', p(
                 '<p>In the first pattern below, you know which kind of task comes next. In the second, you have to identify it. '
                 'The letters stand for different kinds of work with the learning ideas you are studying.</p>') +
              panel('One type at a time, or related types mixed', u.interleave_visual()) +
              p('<p>You can also compare similar ideas directly. Ask whether an activity uses recall, spacing, both, or neither. '
                 'Explaining the distinction is more useful than guessing a label.</p>')),
             ('Ask different questions about one idea', p(
                 '<p>You do not always need a different subject. Keep retrieval practice as the topic and change what you ask.</p>'
                 '<p>First explain what the learner does. Then compare it with rereading. Next, decide whether a particular study activity '
                 'actually includes an attempt to remember. Finally, consider a case where a short flashcard would not be enough.</p>'
                 '<p>The transcript calls this a broader, concept-focused form of interleaving. It brings comparison and varied questions together; '
                 'those are related practices rather than one identical research term.</p>') +
              mixed_question),
             ('Practise the choice, then explain it', exercise(
                 'Someone remembers what mapping and Feynman mean but cannot decide which to try. What would you ask them to practise?',
                 '<p>Give a few study situations without naming a method. For example: “These definitions are clear, but I cannot see how they connect.” '
                 'Ask for a choice and a reason. A map could help expose the relationships; explaining them aloud could also help. '
                 'The reason for the choice matters more than selecting a supposedly perfect label.</p>') +
              p('<p>If a choice goes wrong, compare what the situation requires with what the method actually practises. '
                 'Then try a different case, so you check the distinction rather than repeat a corrected answer.</p>'))
         ], 'retrieval.html', 'Flashcards and spaced recall',
         'Adapted from the study-techniques transcript at 15:20–18:10, including its distinction between mixing topics and testing an idea from different angles.')

    card = panel('Answer before revealing',
        '<div class="flashcard" id="flashcard"><span class="eyebrow">A SHORT RECALL QUESTION</span>'
        '<h3>How are retrieval practice and spaced practice different?</h3>'
        '<button class="button" id="reveal-card" aria-expanded="false" aria-controls="card-back">Show an example answer ↻</button>'
        '<div id="card-back" hidden><strong>Retrieval is the activity.<br>Spacing is the timing.</strong>'
        '<p>Retrieval means trying to recall without looking. Spacing means returning after a gap. '
        'Answering this question without notes today and tomorrow combines both.</p>'
        '<span class="small-note">Compare this with what you actually recalled. Understanding the answer after revealing it is useful feedback, '
        'but it does not mean you recalled it beforehand.</span></div></div>')
    page('retrieval', 'Flashcards and spacing: remember, check, return',
         'METHOD 04', 'A question gives you a reason to recall. A gap between reviews lets you check what remains later.',
         [
             ('What a flashcard asks you to do', p(
                 '<p>A flashcard has a question on one side and an answer on the other. You read the question, '
                 'try to answer, and only then reveal the back. It can be a paper card or a digital one.</p>'
                 '<p>The question gives you a cue. This is called <strong>cued recall</strong>. '
                 'Trying to write everything you remember on a blank page is <strong>free recall</strong>. '
                 'Both involve bringing information to mind; one gives you a more specific starting point.</p>'
                 '<p>For either kind, checking matters. Notice what was missing or mistaken before deciding what to review.</p>')),
             ('Make the question small and clear', p(
                 '<p>“Explain everything about learning” is too broad for a useful short card. '
                 '“How are retrieval and spacing different?” gives you a clear distinction to recall and an answer you can check.</p>') +
              card +
              p('<p>A card can hold a definition, a short reason, or a useful distinction. Longer explanations and decisions need fuller questions too. '
                 'Remembering the name of a method does not by itself tell you when to choose it.</p>')),
             ('Leave a gap before trying again', p(
                 '<p>Answering a card several times in a row is not the same as remembering it tomorrow. '
                 '<strong>Spaced practice</strong> means returning on separate occasions, with time between them.</p>'
                 '<p>On the next occasion, attempt the question before rereading your notes. Then check and correct it. '
                 'An app can help keep track of reviews, but you can also put a reminder in a simple list.</p>') +
              panel('One possible review schedule', u.timeline())),
             ('Decide what needs another review', p(
                 '<p>If the answer is still difficult, return sooner and repair the part you do not understand. '
                 'After reliable recall, leave a longer gap. The dates in the example are a starting point, not a rule for every subject.</p>'
                 '<p>Keep a few questions that matter. Combine the short cards with an occasional explanation or new study situation, '
                 'so your reviews check more than familiar wording.</p>') +
              exercise('Write one question from these lessons that you would like to answer tomorrow.',
                       '<p>For example: “Why could a learner remember the definitions of four methods but still struggle to choose one?” '
                       'This calls for a longer explanation rather than a tiny card. A shorter card could ask what interleaving means.</p>'))
         ], 'bloom.html', 'Bloom’s taxonomy',
         'Adapted from the flashcard and blurting sections at 2:26–6:01, together with the Spanish transcripts’ review-sheet and follow-up plans.')

    bloom_explorer = '<div class="bloom-explorer">' + panel(
        'Select a kind of thinking', u.pyramid() +
        u.note('These are types of thinking, not a proven ranking of teaching methods or a compulsory order.'))
    bloom_explorer += ('<aside class="bloom-detail" id="bloom-detail" aria-live="polite">'
                       '<span class="eyebrow" id="bloom-number">01 / REMEMBER</span>'
                       '<h2 id="bloom-name">' + u.BLOOM[0][1] + '</h2>'
                       '<span class="mini-label">TRY THIS</span><p class="example-question" id="bloom-question">' +
                       u.BLOOM[0][2] + '</p><span class="mini-label">CHECK YOUR RESPONSE</span>'
                       '<p id="bloom-evidence">' + u.BLOOM[0][3] + '</p></aside></div>')
    page('bloom', 'Bloom’s taxonomy: what are you asking yourself to do?',
         'DIFFERENT KINDS OF THINKING', 'The same idea can be recalled, explained, used, compared, judged, or turned into something new.',
         [
             ('What does “taxonomy” mean here?', p(
                 '<p>A taxonomy is a way of grouping things. Bloom’s revised taxonomy groups the kinds of thinking a learning task can ask for. '
                 'It helps you notice the difference between remembering a definition and making a decision with that knowledge.</p>'
                 '<p>Take spacing. You might remember the word, explain what it means, or use it to plan a review. '
                 'Those are different tasks about the same idea.</p>'
                 '<p>The categories describe tasks. They do not divide people into fixed kinds of learner, and they do not tell you to skip basic understanding.</p>')),
             ('Meet the six kinds of question', p(
                 '<p>Select a part of the pyramid. Each example uses the learning ideas from these lessons. '
                 'Notice how the task changes even though the subject stays the same.</p>') +
              bloom_explorer +
              p('<p>“Create” can mean designing a study session that is new to you. You do not need to produce new scientific research '
                 'to do something useful with that category.</p>')),
             ('Understand the difference between compare and judge', example('Choosing what to practise',
                 '<p><strong>Analyze:</strong> “How do flashcards and Feynman differ?” You might explain that a short card asks for a specific answer, '
                 'while a beginner-friendly explanation asks you to connect the reasoning.</p>'
                 '<p><strong>Evaluate:</strong> “Which would help someone who recalls every definition but cannot explain how the ideas fit?” '
                 'Now you need a reason for choosing. An explanation or map addresses that difficulty more directly than another set of definition cards.</p>'
                 '<p>The choice depends on the difficulty. Someone who understands an idea but keeps forgetting its exact terms may need those short cards.</p>')),
             ('Begin with a purpose, then learn what it requires', p(
                 '<p>The transcript suggests asking a meaningful question early, instead of waiting until every detail has been memorized. '
                 'Try: “How could I stop confusing retrieval with spacing?” That gives you a reason to learn the definitions, compare examples, and practise choosing.</p>'
                 '<p>If you cannot get started, ask for the missing explanation or a worked example. Then return to the question. '
                 'Check important details from memory too; comparisons do not guarantee that every fact will be remembered automatically.</p>') +
              exercise('Write a question that asks someone to choose a study method and explain why.',
                       '<p>For example: “I can follow the explanation while it is open, but lose the reasoning when I close it. '
                       'What would you try next, and what would you check?” A useful answer connects the chosen activity to the actual difficulty.</p>'))
         ], 'cycle.html', 'A study session',
         'Adapted from the Bloom’s taxonomy transcript. The lesson preserves its emphasis on applying, comparing, and judging '
         'while qualifying its broad claims about automatic memory and optimal sequencing.')

    page('cycle', 'Put the methods into a study session',
         'PUTTING IT TOGETHER', 'Let’s plan a small session about learning methods, rather than trying to study everything at once.',
         [
             ('Choose one question and a few useful sources', p(
                 '<p>For this session, use the question: <strong>“How can I tell whether I have learned something or only recognize it?”</strong> '
                 'By the end, you want to explain the difference and suggest a way to check it.</p>'
                 '<p>Start with a relevant lesson or source. If you use an AI tutor, give it that material and your goal. '
                 'Add another source when it helps answer a gap or compare a genuine difference; the number of files is not the achievement.</p>'
                 '<p>Before reading, say what you already think. It is fine if your first answer is incomplete.</p>')),
             ('Work through the question', p(
                 '<p>Read the explanation. Connect recognition, recall, and checking. Make a small map if the relationships are unclear.</p>'
                 '<p>Now put the text aside and explain the answer as if teaching a beginner. Use an example: '
                 'seeing “spacing” and knowing it looks familiar differs from explaining it without notes and planning a review.</p>'
                 '<p>Try a new situation too. If a learner can repeat a definition but cannot choose a method, what would you practise with them?</p>') +
              panel('The study cycle', u.cycle_diagram())),
             ('Use mistakes to choose the next action', example('A partly right answer',
                 '<p>You answer: “They need more practice.” That might be true, but it leaves an important question: <em>practice doing what?</em></p>'
                 '<p>If the learner remembers the definitions but cannot choose a method, practise comparing study situations and explaining a choice. '
                 'If they cannot explain a definition, return to its meaning first.</p>'
                 '<p>Useful feedback identifies the part that needs attention. After working on it, try another example without being told which method to use.</p>')),
             ('Finish with something you can return to', p(
                 '<p>Write a short note: what you explained on your own, where you needed help, and one question to revisit. '
                 'Keep the relevant source nearby so you know where to check an error.</p>'
                 '<p>Use the revision sheet as a prompt later. Before reading its explanation, try recalling what a diagram means. '
                 'A useful review sheet helps you bring the learning back; it does not need to repeat every source.</p>'
                 '<p>A session can be short or long depending on the topic. The transcripts’ 90-minute example is one possible plan, not a required or proven optimal duration.</p>') +
              exercise('What would you leave yourself at the end of this session?',
                       '<p>For example: “I could explain recognition versus recall. I still needed help choosing a task for a learner who only knows definitions. '
                       'Tomorrow I will answer a new study situation before reopening the lesson.”</p>'))
         ], 'ai.html', 'Learning with an AI tutor',
         'Adapted from the Spanish transcript about building context, answering diagnostic questions, receiving feedback, and creating a review kit.')

    page('ai', 'Use AI to guide your learning',
         'LEARNING WITH AI', 'Give the tutor something reliable to work from, ask useful questions, and make your own attempts before asking for corrections.',
         [
             ('Give the tutor a clear starting point', p(
                 '<p>An AI response is easier to check when it is working from material you can inspect. '
                 'Provide the relevant lesson, notes, or reading. Say what you want to learn and what you find confusing.</p>'
                 '<p>Then ask for the few ideas that hold the topic together. For learning methods, that might mean recall, meaning, comparison, feedback, and review. '
                 'Ask how the ideas connect, not only for a separate summary of each file.</p>'
                 '<p>The first map is a starting explanation to examine. It is not proof that the AI has found every important idea or interpreted every source correctly.</p>') +
              example('A first request',
                      '<p>“Using these sources, explain the main ideas I need to understand. Show how they connect, and point me to the passage that supports each important claim.”</p>')),
             ('Ask three kinds of question', p(
                 '<p>The Spanish transcripts offer two versions of the “three questions.” They share a useful direction: '
                 'find the structure, examine the reasoning, and then test your understanding.</p>') +
              example('Use these in order',
                 '<p><strong>1. Find the structure.</strong> “What are the main ideas, and how do they connect?”</p>'
                 '<p><strong>2. Work through the meaning.</strong> “What would I need to understand to teach this to a complete beginner? '
                 'What is easily confused, and what example would make it clear?”</p>'
                 '<p><strong>3. Test it.</strong> “Ask me a question that would expose a shallow understanding. Wait for my answer before explaining.”</p>') +
              details('Where do expert disagreements fit?',
                      '<p>One transcript’s second question asks where the sources disagree and what the strongest argument on each side is. '
                      'Use it when there is a real disagreement in the material. Ask for the supporting passages. '
                      'If the sources agree, compare their scope, assumptions, or examples instead of asking the AI to invent opposing camps.</p>')),
             ('Answer, then ask for a useful correction', p(
                 '<p>Try the question yourself. Then ask which part of the answer was sound, where the reasoning was missing, and what you should revisit.</p>'
                 '<p>For example, “They need more practice” may identify a problem without explaining it. '
                 'Ask whether the missing part is recall, a relationship between ideas, or choosing the right method. '
                 'Check the correction against your source, then try a new example.</p>'
                 '<p>If you are stuck, ask for a small hint. Select a level below to see how the amount of supplied thinking changes.</p>') +
              panel('Different amounts of help', u.hint_ladder(), 'H0 = NO HINT · H5 = FULL EXPLANATION')),
             ('Turn the gaps into a short plan', p(
                 '<p>After a few attempts, ask the tutor to identify the most important remaining gap from your actual answers. '
                 'For each gap, ask what to read, what to try, and what would count as a successful attempt.</p>'
                 '<p>Finish with a short review sheet and a few questions for later. More generated pages are not necessarily more useful. '
                 'Keep enough detail to continue, including where to check anything uncertain.</p>') +
              details('Copy a complete starter request',
                 '<div class="prompt"><button id="copy-prompt">Copy prompt</button><pre id="starter">'
                 'Help me learn [TOPIC] using [SOURCES]. My goal is [WHAT I WANT TO DO].\n'
                 'Explain the main ideas and how they connect, one part at a time.\n'
                 'Help me understand enough to teach a beginner, using a simple example.\n'
                 'Ask a question that checks the reasoning and wait for my attempt.\n'
                 'When correcting me, separate what is right from the first missing or mistaken part.\n'
                 'Give a small hint if needed, then ask a different question without the answer.\n'
                 'End with my main gap, the source passage to revisit, and a question to try later.\n'
                 'Do not invent source references or claim to know progress I have not shown.</pre></div>'))
         ], 'mastery.html', 'Check what you have learned',
         'Adapted from both Spanish NotebookLM transcripts and the Feynman-with-feedback section of the study-techniques transcript. '
         'Tool-specific interface instructions, sponsorships, and unverified speedup claims are not part of the teaching steps.')

    page('mastery', 'How can you tell whether the studying helped?',
         'CHECK YOUR LEARNING', 'Look at what you can explain and do, including after some time has passed.',
         [
             ('Use a specific question', p(
                 '<p>“Do I know this?” is hard to answer honestly when the page feels familiar. '
                 'Ask something you can actually try: “Can I explain why recall and spacing are different, without looking?”</p>'
                 '<p>Keep the answer you produced, not only your impression of the session. '
                 'If a tutor supplied the key distinction, note that too. It can be useful help without being evidence that you found the distinction yourself.</p>')),
             ('Check more than the definition', p(
                 '<p>A definition is one part of understanding. Can you explain its meaning, give reasons, identify its limits, and use it in a new case? '
                 'The diagram gives you six kinds of check.</p>') +
              panel('Select a part of understanding', u.mastery_visual()) +
              ''.join(f'<details class="dimension-detail" id="{key}"><summary>{title}</summary>'
                      f'<div class="detail-body"><p>{question}</p></div></details>' for key, title, question in [
                          ('definitions', 'Definitions', 'What does retrieval practice mean? Answer without the lesson.'),
                          ('intuition', 'Meaning', 'Explain why recognizing an answer is different from recalling it.'),
                          ('proof', 'Reasoning', 'Why does repeating an AI explanation not yet show you can explain it yourself?'),
                          ('boundaries', 'Limits', 'What can a short flashcard check, and what calls for a fuller task?'),
                          ('transfer', 'New situations', 'How could you practise recall without flashcards?'),
                          ('retention', 'Later recall', 'Next week, explain the distinction and plan a new review without these notes.')
                      ])),
             ('Return later, and change one thing if needed', p(
                 '<p>A clear answer today is a good start. Try another question after a gap to see what you can still explain or use. '
                 'If something has fallen away, choose a response that matches that difficulty.</p>'
                 '<p>You do not need a complicated score. Keep a short record of the attempt, the help used, the gap, and the next task. '
                 'If you change your routine, make one manageable change and look at several later attempts before deciding how much it helped.</p>') +
              exercise('What would tell you more: finishing ten pages or explaining one important idea without help?',
                       '<p>The explanation gives direct evidence of that particular ability. Pages read tell you about exposure, '
                       'which may be useful but does not by itself show what you can recall or use. '
                       'Neither measure alone covers everything; check the ability you actually wanted to learn.</p>'))
         ], 'revision.html', 'The revision sheet',
         'Based on the transcripts’ diagnostic questions and targeted feedback, with the project’s independent and delayed checks retained.')

    page('study-habits', 'What about the other familiar study techniques?',
         'OPTIONAL LESSON', 'These are useful to recognize, but you do not need to add them all to your routine.',
         [
             ('Highlighting and rereading', p(
                 '<p>Highlighting marks a passage so you can find it again. Rereading gives you another look at an explanation. '
                 'Both can support studying, but neither action by itself tells you what you can explain without the page.</p>'
                 '<p>The difficulty is relying on familiarity as the only check. After reading, ask a question or explain the main point. '
                 'Return to the text where that attempt reveals something missing.</p>'
                 '<p>The speaker describes these methods very harshly. The practical lesson here is narrower: use reading and highlighting for a purpose, '
                 'and include an attempt that checks your own understanding.</p>')),
             ('Blurting, or a blank-page recall attempt', p(
                 '<p>Read a short topic, put it away, and write what you remember on a blank page. Then compare it with the source '
                 'and work on the missing or mistaken parts. This is often called blurting or a brain dump.</p>'
                 '<p>It is free recall: you have no particular question directing the answer. A flashcard is more specific because its question supplies a cue.</p>'
                 '<p>A list of remembered terms is a start. To check the relationships too, explain how two items connect or use one in a new situation.</p>')),
             ('Cornell notes', p(
                 '<p>Cornell notes divide a page into three areas: questions on the left, notes on the right, and a short summary at the bottom. '
                 'The layout keeps reference material and questions together.</p>'
                 '<p>Make the questions do useful work. Alongside “What is spacing?”, ask “How would I combine spacing with recall?” '
                 'For the summary, explain the main point in your own words rather than only shortening the sentences.</p>'
                 '<p>Later, cover the notes and try answering the questions. The page format organizes the material; your questions and explanations determine what you practise.</p>') +
              exercise('How could you turn a highlighted paragraph into something you can practise?',
                       '<p>Write a question about its main point, hide the paragraph, and answer. Then check what you missed. '
                       'For a relationship or decision, ask for an explanation or a new example rather than only a definition.</p>'))
         ], 'methods.html', 'Return to the four methods',
         'Adapted from the highlighting, rereading, blurting, and Cornell sections of the study-techniques transcript. '
         'The transcript’s tier rankings are the speaker’s judgments; they are not treated as universal effectiveness grades.')

    origins = heading('ABOUT THE SOURCES', 'Where the framework came from',
                      'The supplied videos describe study methods, Bloom’s taxonomy, and a source-based way of using AI as a tutor.')
    origins += p('<p>The two Spanish videos tell a story about an MIT student using NotebookLM to prepare with many sources, '
                 'find the main ideas, examine their reasoning, and answer difficult questions. '
                 'They offer slightly different versions of the three starting questions.</p>'
                 '<p>The English videos explain the thinking involved in common study techniques and use Bloom’s taxonomy '
                 'to distinguish recalling, explaining, applying, comparing, judging, and creating.</p>'
                 '<p>These lessons bring those explanations together in English. The examples stay within learning itself, '
                 'so you do not need background in the videos’ other subjects.</p>')
    origins += panel('What the project kept and changed',
        '<div class="origin-flow"><div><span class="pill">KEPT</span><h3>See the structure</h3><div class="origin-symbol">◇ → ◇</div>'
        '<p>Map the main ideas<br>Ask what is unclear<br>Follow up on the gap</p></div><span class="arrow">→</span>'
        '<div><span class="pill">ADAPTED</span><h3>Check the explanation</h3><div class="origin-symbol">? → ?</div>'
        '<p>Compare similar ideas<br>Examine assumptions<br>Find examples and limits</p></div><span class="arrow">→</span>'
        '<div><span class="pill">ADDED</span><h3>Check your own learning</h3><div class="origin-symbol">○ → ✓</div>'
        '<p>Record hints<br>Attempt new questions<br>Return after a delay</p></div></div>')
    origins += details('Claims to keep separate from the teaching advice',
                       '<p>The videos’ MIT endorsement and dramatic speedup stories have not been independently verified here. '
                       'Their ratings and broad statements about memory are not scientific guarantees. '
                       'The lessons therefore keep the practical explanations while avoiding fixed memorization quotas, '
                       'claims that all memory will appear automatically, and promises that a technique always works.</p>'
                       '<p>The original project documents list research on individual practices. The exact combined routine remains a proposal to test and adjust.</p>')
    origins += links([('library.html', 'Read the original transcripts'), ('learning.html', 'Begin the first lesson')])
    write('origins', 'Where the framework came from', origins)
