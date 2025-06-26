// 全局變數
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswer = null;
let quizStarted = false;
let showResult = false;

// 情緒數據
const emotions = [
    {
        name: '快樂',
        englishName: 'Happiness',
        auCode: 'AU12',
        description: '嘴角向上翹起，眼周出現笑紋，面部肌肉放鬆',
        color: 'happiness',
        icon: '😊',
        videoId: '1abc123' // 示例ID
    },
    {
        name: '悲傷',
        englishName: 'Sadness',
        auCode: 'AU1 + AU15',
        description: '眉毛內側被拉起呈齒字形，嘴角向下拉，需要幫助的信號',
        color: 'sadness',
        icon: '😢',
        videoId: '1abc124'
    },
    {
        name: '憤怒',
        englishName: 'Anger',
        auCode: 'AU4 + AU5 + AU7 + AU23',
        description: '眉毛向中間收攏，上眼瞼上揚，嘴唇緊閉，想要摧毀障礙',
        color: 'anger',
        icon: '😡',
        videoId: '1abc125'
    },
    {
        name: '厭惡',
        englishName: 'Disgust',
        auCode: 'AU9 + AU15 + AU16',
        description: '鼻子皺紋，上唇向上拉起，想要擺脫不愉快的人事物',
        color: 'disgust',
        icon: '🤢',
        videoId: '1abc126'
    },
    {
        name: '恐懼',
        englishName: 'Fear',
        auCode: 'AU1 + AU2 + AU4 + AU5 + AU7 + AU20 + AU26',
        description: '眉毛被拉向中心然後揚起，下眼瞼緊張，需要安全感',
        color: 'fear',
        icon: '😰',
        videoId: '1abc127'
    },
    {
        name: '驚訝',
        englishName: 'Surprise',
        auCode: 'AU1 + AU2 + AU5 + AU26',
        description: '眉毛上揚，眼睛睜大，嘴巴張開，想要吸收更多資訊',
        color: 'surprise',
        icon: '😮',
        videoId: '1abc128'
    },
    {
        name: '輕蔑',
        englishName: 'Contempt',
        auCode: 'AU12 + AU14',
        description: '一側嘴角翹起，展現優越感，阻止不道德行為的表達',
        color: 'contempt',
        icon: '😏',
        videoId: '1abc129'
    }
];

// 測驗題目數據
const quizQuestions = [
    {
        id: 1,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/cf7e7733-f24d-4b66-ba2f-3066b2e7312c.png',
        options: ['悲傷', '憤怒', '快樂', '驚訝'],
        correctAnswer: 2,
        explanation: '嘴角自然上揚，眼周出現笑紋，面部肌肉放鬆，符合快樂表情的典型特徵。',
        emotion: '快樂',
        auCode: 'AU12'
    },
    {
        id: 2,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/8b73f6c4-f545-48bc-9019-5567a847b008.png',
        options: ['悲傷', '快樂', '憤怒', '驚訝'],
        correctAnswer: 0,
        explanation: '眉毛內側上提形成倒八字形，嘴角下垂，整體面部肌肉下沉，符合悲傷表情的典型特徵。',
        emotion: '悲傷',
        auCode: 'AU1 + AU15'
    },
    {
        id: 3,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/c356750d-2c4e-4aa3-b3c1-afd3a8434cdb.png',
        options: ['快樂', '憤怒', '悲傷', '驚訝'],
        correctAnswer: 1,
        explanation: '眉毛向中央收攏，眉間出現垂直皺紋，眼神緊張，符合憤怒表情的典型特徵。',
        emotion: '憤怒',
        auCode: 'AU4'
    },
    {
        id: 4,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/98d18e29-2131-41c0-890f-0f86a69bb7ac.png',
        options: ['快樂', '悲傷', '憤怒', '驚訝'],
        correctAnswer: 3,
        explanation: '眉毛上提，眼睛睜大，嘴巴微張，符合驚訝表情的典型特徵。',
        emotion: '驚訝',
        auCode: 'AU1 + AU5'
    },
    {
        id: 5,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/1a474a7e-7188-4923-9a97-90a2a10fa10b.png',
        options: ['憤怒', '悲傷', '快樂', '驚訝'],
        correctAnswer: 1,
        explanation: '眉毛內側上提，嘴角下垂，面部失去張力，符合悲傷表情的典型特徵。',
        emotion: '悲傷',
        auCode: 'AU1 + AU15'
    },
    {
        id: 6,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/7676c806-847e-48ca-b75a-d0465dbd0ee7.png',
        options: ['憤怒', '快樂', '悲傷', '驚訝'],
        correctAnswer: 0,
        explanation: '眉毛向中央收攏，眉間垂直皺紋明顯，嘴唇緊閉，符合憤怒表情的典型特徵。',
        emotion: '憤怒',
        auCode: 'AU4 + AU23'
    },
    {
        id: 7,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/25ac1667-a42e-4c08-bb9e-85696383fef5.png',
        options: ['快樂', '悲傷', '憤怒', '驚訝'],
        correctAnswer: 2,
        explanation: '鼻子出現皺紋，上唇略微上提，整體面部表情顯示不適感，在四個選項中最接近憤怒。',
        emotion: '憤怒',
        auCode: 'AU9 + AU10'
    },
    {
        id: 8,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/3964f336-e10c-426c-93e9-c5105986d191.png',
        options: ['驚訝', '快樂', '悲傷', '憤怒'],
        correctAnswer: 0,
        explanation: '眉毛瞬間上揚，眼睛睜大，符合驚訝表情的典型特徵。',
        emotion: '驚訝',
        auCode: 'AU1 + AU2 + AU5'
    },
    {
        id: 9,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/47841ea1-18a0-44b3-b948-29f9ccbd8322.png',
        options: ['快樂', '驚訝', '悲傷', '憤怒'],
        correctAnswer: 2,
        explanation: '眼部緊閉，嘴部緊縮，整體面部表情顯示不適，在四個選項中最接近悲傷。',
        emotion: '悲傷',
        auCode: 'AU9 + AU10'
    },
    {
        id: 10,
        title: '請問下列圖片中的人物，最有可能是呈現哪一種情緒？',
        imageUrl: 'https://pub-cdn.sider.ai/u/U0X7H8L9A0Y/web-coder/685d05b434d3ec5286027a58/resource/a9c0e265-bac3-4f13-8c69-8346b71f0822.png',
        options: ['悲傷', '快樂', '驚訝', '憤怒'],
        correctAnswer: 3,
        explanation: '眉毛上提同時眉間出現皺紋，額頭緊張，在四個選項中最接近憤怒表情。',
        emotion: '憤怒',
        auCode: 'AU1 + AU4'
    }
];

// 初始化頁面
function initializePage() {
    // 隱藏載入畫面
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 1500);

    // 渲染情緒卡片
    renderEmotionCards();
    
    // 設置導航
    setupNavigation();
    
    // 設置滾動事件
    setupScrollEvents();
}

// 渲染情緒卡片
function renderEmotionCards() {
    const emotionsGrid = document.getElementById('emotions-grid');
    emotionsGrid.innerHTML = '';
    
    emotions.forEach((emotion, index) => {
        const card = document.createElement('div');
        card.className = `emotion-card ${emotion.color}`;
        card.style.animationDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="emotion-icon">${emotion.icon}</div>
            <h3 class="emotion-title">${emotion.name}</h3>
            <p class="emotion-english">${emotion.englishName}</p>
            <div class="emotion-au">${emotion.auCode}</div>
            <p class="emotion-description">${emotion.description}</p>
            <button class="emotion-video-btn" onclick="toggleEmotionVideo(${index})">
                <i class="fas fa-play"></i>
                <span id="video-btn-text-${index}">觀看示例影片</span>
                <i class="fas fa-chevron-down" id="video-btn-icon-${index}"></i>
            </button>
            <div id="video-container-${index}" class="emotion-video hidden">
                <iframe src="https://drive.google.com/file/d/${emotion.videoId}/preview" 
                        width="100%" height="200" allow="autoplay; fullscreen"
                        title="${emotion.name}情緒示例影片"></iframe>
            </div>
            <div class="emotion-note">
                💡 AU = Action Unit (動作單位)
            </div>
        `;
        
        emotionsGrid.appendChild(card);
    });
}

// 切換情緒影片顯示
function toggleEmotionVideo(index) {
    const videoContainer = document.getElementById(`video-container-${index}`);
    const btnText = document.getElementById(`video-btn-text-${index}`);
    const btnIcon = document.getElementById(`video-btn-icon-${index}`);
    
    if (videoContainer.classList.contains('hidden')) {
        videoContainer.classList.remove('hidden');
        btnText.textContent = '隱藏示例影片';
        btnIcon.className = 'fas fa-chevron-up';
    } else {
        videoContainer.classList.add('hidden');
        btnText.textContent = '觀看示例影片';
        btnIcon.className = 'fas fa-chevron-down';
    }
}

// 設置導航
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                scrollToSection(target.substring(1));
            }
        });
    });
}

// 設置滾動事件
function setupScrollEvents() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滾動，隱藏導航
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滾動，顯示導航
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 滾動到指定區域
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // 考慮導航欄高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 顯示測驗
function showQuiz() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('quiz-section').classList.remove('hidden');
    document.querySelector('.navbar').style.display = 'none';
    resetQuizState();
}

// 顯示文字測驗（暫時用警告框代替）
function showTextQuiz() {
    alert('文字描述測驗功能開發中，敬請期待！');
}

// 返回首頁
function backToHome() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('quiz-section').classList.add('hidden');
    document.querySelector('.navbar').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 重置測驗狀態
function resetQuizState() {
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedAnswer = null;
    quizStarted = false;
    showResult = false;
    
    document.getElementById('quiz-start').classList.remove('hidden');
    document.getElementById('quiz-progress').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
}

// 開始測驗
function startQuiz() {
    quizStarted = true;
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-progress').classList.remove('hidden');
    displayQuestion();
}

// 顯示題目
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    
    // 更新進度條
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // 更新題目信息
    document.getElementById('question-number').textContent = 
        `題目 ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('question-title').textContent = currentQuestion.title;
    document.getElementById('question-img').src = currentQuestion.imageUrl;
    document.getElementById('question-img').alt = `第${currentQuestionIndex + 1}題表情圖片`;
    
    // 渲染選項
    renderOptions();
    
    // 更新導航按鈕
    updateNavigationButtons();
}

// 渲染選項
function renderOptions() {
    const optionsGrid = document.getElementById('options-grid');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    optionsGrid.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.onclick = () => selectAnswer(index);
        
        // 獲取情緒表情符號
        const emotion = emotions.find(e => e.name === option);
        const emoji = emotion ? emotion.icon : '🤔';
        
        button.innerHTML = `
            <span class="option-emoji">${emoji}</span>
            <span>${option}</span>
        `;
        
        // 如果已經選擇過這個答案，保持選中狀態
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
            selectedAnswer = index;
        }
        
        optionsGrid.appendChild(button);
    });
}

// 選擇答案
function selectAnswer(answerIndex) {
    selectedAnswer = answerIndex;
    
    // 移除所有選項的選中狀態
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加選中狀態到當前選項
    document.querySelectorAll('.option-btn')[answerIndex].classList.add('selected');
    
    // 啟用下一題按鈕
    updateNavigationButtons();
}

// 更新導航按鈕
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 上一題按鈕
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 下一題按鈕
    nextBtn.disabled = selectedAnswer === null;
    
    // 更新下一題按鈕文字
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.innerHTML = '<span>完成測驗</span><i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = '<span>下一題</span><i class="fas fa-arrow-right"></i>';
    }
}

// 上一題
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedAnswer = userAnswers[currentQuestionIndex] ?? null;
        displayQuestion();
    }
}

// 下一題
function nextQuestion() {
    if (selectedAnswer !== null) {
        // 儲存答案
        userAnswers[currentQuestionIndex] = selectedAnswer;
        
        if (currentQuestionIndex < quizQuestions.length - 1) {
            // 下一題
            currentQuestionIndex++;
            selectedAnswer = userAnswers[currentQuestionIndex] ?? null;
            displayQuestion();
        } else {
            // 顯示結果
            showQuizResult();
        }
    }
}

// 顯示測驗結果
function showQuizResult() {
    document.getElementById('quiz-progress').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // 更新分數顯示
    document.getElementById('score-display').textContent = `${score} / ${quizQuestions.length}`;
    document.getElementById('score-text').textContent = `您答對了 ${percentage}% 的題目`;
    
    // 更新表現徽章
    const badge = document.getElementById('performance-badge');
    if (score >= 8) {
        badge.textContent = '🏆 專家級表現！';
        badge.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
    } else if (score >= 6) {
        badge.textContent = '🎯 良好水準！';
        badge.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
    } else if (score >= 4) {
        badge.textContent = '📚 持續學習！';
        badge.style.background = 'linear-gradient(135deg, #f59e0b, #f97316)';
    } else {
        badge.textContent = '💪 加油練習！';
        badge.style.background = 'linear-gradient(135deg, #ef4444, #f97316)';
    }
    
    // 渲染詳細結果
    renderDetailedResults();
}

// 計算分數
function calculateScore() {
    return userAnswers.reduce((score, answer, index) => {
        return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
}

// 渲染詳細結果
function renderDetailedResults() {
    const detailedResults = document.getElementById('detailed-results');
    detailedResults.innerHTML = '';
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const emotion = emotions.find(e => e.name === question.emotion);
        const emoji = emotion ? emotion.icon : '🤔';
        
        resultItem.innerHTML = `
            <div class="result-item-header">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <h4>
                    <span>${emoji}</span>
                    第 ${index + 1} 題 - ${question.emotion}
                </h4>
            </div>
            <div class="result-answers">
                您的答案：${userAnswer === -1 ? '未作答' : question.options[userAnswer]} | 
                正確答案：${question.options[question.correctAnswer]}
            </div>
            <div class="result-explanation">
                <h5><i class="fas fa-lightbulb"></i> FACS專業解析</h5>
                <p>${question.explanation}</p>
                ${question.auCode ? `<div class="result-au-code">FACS編碼: ${question.auCode}</div>` : ''}
            </div>
        `;
        
        detailedResults.appendChild(resultItem);
    });
}

// 重新測驗
function resetQuiz() {
    resetQuizState();
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', initializePage);

// 平滑滾動支持
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        scrollToSection(target);
    }
});

// 鍵盤快捷鍵支持
document.addEventListener('keydown', (e) => {
    if (quizStarted && !showResult) {
        // 數字鍵選擇答案
        if (e.key >= '1' && e.key <= '4') {
            const answerIndex = parseInt(e.key) - 1;
            const currentQuestion = quizQuestions[currentQuestionIndex];
            if (answerIndex < currentQuestion.options.length) {
                selectAnswer(answerIndex);
            }
        }
        
        // Enter 鍵下一題
        if (e.key === 'Enter' && selectedAnswer !== null) {
            nextQuestion();
        }
        
        // 左右箭頭導航
        if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
            previousQuestion();
        }
        if (e.key === 'ArrowRight' && selectedAnswer !== null) {
            nextQuestion();
        }
    }
});

// 頁面離開前確認
window.addEventListener('beforeunload', (e) => {
    if (quizStarted && !showResult && currentQuestionIndex > 0) {
        e.preventDefault();
        e.returnValue = '您的測驗進度將會遺失，確定要離開嗎？';
    }
});
