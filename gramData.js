const grammarData = [
   {
      title: "うちに (uchini)",
      badges: ["JLPT N3", "Trong lúc / Trước khi"],
      meaning: "Diễn tả trong khoảng thời gian còn đang ở trạng thái A thì thực hiện B, hoặc trước khi trạng thái A thay đổi.",
      keywords: ["trong lúc", "trước khi", "khi còn"],
      structure: [
         "Vる / Vている / Vない ＋ うちに",
         "い形容詞 (Tính từ -i) / な形容詞 (Tính từ -na) ＋ うちに",
         "N の ＋ うちに"
      ],
      examples: [
         { jp: "春が来るうちに、花が咲く。", vi: "Trong khi mùa xuân đến thì hoa sẽ nở." },
         { jp: "日本に住んでいるうちに、日本語が上手になった。", vi: "Trong khi sống ở Nhật, tiếng Nhật của tôi đã tiến bộ." },
         { jp: "熱が下がらないうちに、薬を飲んだほうがいい。", vi: "Khi cơn sốt vẫn chưa hạ, nên uống thuốc thì hơn." },
         { jp: "若いうちに、いろいろな経験をしたほうがいい。", vi: "Khi còn trẻ thì nên trải nghiệm nhiều thứ." },
         { jp: "元気なうちに、世界を旅行したいです。", vi: "" },
         { jp: "学生のうちに、もっと勉強しておけばよかった。", vi: "Lúc còn là sinh viên, giá mà mình học nhiều hơn." },
      ],
      compare: [
         "『あいだに』 nhấn mạnh vào một thời điểm trong khoảng, còn 『うちに』 thiên về 'trước khi mất cơ hội'."
      ],
      mistakes: [
         { type: "warn", text: "Không dùng うちに với những hành động ngoài ý muốn khó kiểm soát." },
         { type: "ok", text: "Dùng với các thay đổi tự nhiên: 暗くならないうちに (trước khi trời tối)." }
      ],
      tip: "Hãy nghĩ うちに = 'tranh thủ lúc còn ~'."
   },
   {
      title: "あいだ (aida)",
      badges: ["JLPT N3", "Trong suốt khoảng thời gian"],
      meaning: "Diễn tả một hành động kéo dài liên tục trong suốt khoảng thời gian A.",
      keywords: ["trong khi", "suốt"],
      structure: [
         "N の ＋ あいだ",
         "Vている ＋ あいだ"
      ],
      examples: [
         { jp: "夏休みのあいだ、毎日泳ぎに行った。", vi: "Suốt kỳ nghỉ hè, tôi đi bơi mỗi ngày." },
         { jp: "映画を見ているあいだ、ずっと泣いていた。", vi: "Trong lúc xem phim, tôi đã khóc suốt." }
      ],
      compare: [
         "『あいだに』 = một khoảnh khắc trong khoảng; 『あいだ』 = suốt cả khoảng."
      ],
      tip: "あいだ = 'toàn bộ khoảng thời gian'."
   },
   {
      title: "あいだに (aidani)",
      badges: ["JLPT N3", "Trong lúc (một lần)"],
      meaning: "Diễn tả một hành động xảy ra tại một thời điểm nào đó trong khoảng thời gian A.",
      keywords: ["trong lúc", "khi đang"],
      structure: [
         "N の ＋ あいだに",
         "Vている ＋ あいだに"
      ],
      examples: [
         { jp: "授業のあいだに寝てしまった。", vi: "Tôi đã ngủ gật trong lúc học." },
         { jp: "父が昼寝しているあいだに、出かけました。", vi: "Trong lúc bố đang ngủ trưa, tôi đã ra ngoài." }
      ],
      compare: [
         "『あいだ』 = liên tục; 『あいだに』 = một khoảnh khắc ngắn xảy ra trong khoảng."
      ],
      tip: "あいだに = 'trong lúc đó, đã kịp xảy ra một việc'."
   },
   {
      title: "てからでないと (te kara denaito)",
      badges: ["JLPT N3", "Nếu chưa A thì không B"],
      meaning: "Diễn tả nếu chưa thực hiện A thì không thể thực hiện B.",
      keywords: ["nếu không", "chỉ khi", "sau khi"],
      structure: [
         "Vて ＋ からでないと ～ ない",
         "Vて ＋ からでなければ ～ ない"
      ],
      examples: [
         { jp: "許可をもらってからでないと入れません。", vi: "Nếu chưa được phép thì không thể vào." },
         { jp: "この薬は食事をしてからでないと飲めない。", vi: "Thuốc này chỉ uống sau khi ăn." }
      ],
      compare: [
         "『てから』 = sau khi A thì làm B; 『てからでないと』 = nếu không A thì không thể B."
      ],
      mistakes: [
         { type: "danger", text: "Không dùng trong câu khẳng định bình thường, luôn đi với ～ない." }
      ],
      tip: "Hãy nghĩ = 'nếu chưa A thì không được B'."
   },
   {
      title: "てからでなければ (te kara denakereba)",
      badges: ["JLPT N3", "Nếu không A thì không B"],
      meaning: "Ý nghĩa giống với てからでないと, nhấn mạnh điều kiện cần A để B có thể xảy ra.",
      keywords: ["nếu không", "trừ khi", "sau khi"],
      structure: [
         "Vて ＋ からでなければ ～ ない"
      ],
      examples: [
         { jp: "実物を見てからでなければ買いません。", vi: "Nếu không nhìn thấy đồ thật thì tôi sẽ không mua." },
         { jp: "身分証を提示してからでなければ入場できません。", vi: "Nếu không xuất trình giấy tờ tùy thân thì không được vào." }
      ],
      compare: [
         "『てからでないと』 và 『てからでなければ』 hầu như giống nhau, chỉ khác về sắc thái trang trọng."
      ],
      tip: "Cả hai đều = 'chỉ khi A thì mới B'."
   },
   {
      title: "ところだ · 所だ (tokoro da)",
      badges: ["JLPT N3", "Thời điểm của hành động"],
      meaning: "Diễn tả thời điểm liên quan tới hành động: sắp làm, đang làm, hoặc vừa mới làm xong.",
      keywords: ["vừa mới", "đúng lúc", "ngay bây giờ", "tiến trình"],
      structure: [
         "Vる ＋ ところだ → (sắp làm)",
         "Vている ＋ ところだ → (đang làm)",
         "Vた ＋ ところだ → (vừa mới làm xong)"
      ],
      examples: [
         { jp: "今から出かけるところだ。", vi: "Mình sắp ra ngoài bây giờ." },
         { jp: "ちょうど夕飯を作っているところだ。", vi: "Đúng lúc đang nấu cơm tối." },
         { jp: "彼はさっき帰ってきたところだ。", vi: "Anh ấy vừa mới về lúc nãy." }
      ],
      compare: [
         "「Vたばかりだ」 vs 「Vたところだ」: 'ところだ' = vừa đúng khoảnh khắc, 'ばかりだ' = mới đây (có thể lâu hơn).",
         "「最中だ」 vs 「Vているところだ」: '最中だ' nhấn mạnh giữa chừng, 'ところだ' trung tính hơn."
      ],
      mistakes: [
         { type: "warn", text: "Dùng với động từ trạng thái (ある／知る…) nghe không tự nhiên." },
         { type: "ok", text: "Hãy kèm mốc thời gian để nghĩa rõ hơn (いま／ちょうど／さっき)." },
         { type: "danger", text: "Đừng nhầm 「ところで」 (nhân tiện) với 「～ところで」 (đúng lúc ~ thì…)." }
      ],
      tip: "『ところ』 = điểm/chỗ → nghĩ như điểm thời gian: trước (Vる), ngay tại (Vている), sau (Vた)."
   },
   {
      title: "ところ ＋ 助詞 (cụm thường gặp)",
      badges: ["JLPT N3", "Kết hợp với trợ từ"],
      meaning: "Một số cụm cố định đi với ところ và trợ từ.",
      examples: [
         { jp: "いいところに来たね。", vi: "Cậu đến đúng lúc đấy.", note: "ところに／ところへ：đúng lúc ai/việc gì đến." },
         { jp: "お忙しいところを、失礼します。", vi: "Xin lỗi đã làm phiền đúng lúc anh/chị đang bận.", note: "ところを：đang trong lúc ~ bị tác động." },
         { jp: "試験を受けているところで、停電になった。", vi: "Đang thi thì mất điện.", note: "～ところで：'đúng lúc thì' (khác với liên từ ところで＝'nhân tiện')." },
         { jp: "ところが、雨が降ってきた。", vi: "Thế nhưng trời lại mưa.", note: "ところが：liên từ 'nhưng mà'." }
      ]
   },
   {
      title: "とおりだ・とおりに (toori da / toori ni)",
      badges: ["JLPT N3", "Theo như / Đúng như"],
      meaning: "Diễn tả sự việc xảy ra hoặc thực hiện đúng như điều đã nói, đã dự đoán, đã chỉ dẫn.",
      keywords: ["đúng như", "theo như", "giống như"],
      structure: [
         "N の ＋ とおりだ／とおりに",
         "Vる ＋ とおりだ／とおりに",
         "Vた ＋ とおりだ／とおりに"
      ],
      examples: [
         { "jp": "説明書のとおりに、組み立ててください。", "vi": "Hãy lắp ráp theo đúng hướng dẫn." },
         { "jp": "彼が言うとおりにすれば、大丈夫です。", "vi": "Nếu làm đúng như anh ấy nói thì sẽ ổn thôi." },
         { "jp": "予想したとおり、試験は難しかった。", "vi": "Đúng như đã dự đoán, kỳ thi khó thật." }
      ],
      compare: [
         "『ように』 cũng có nghĩa 'như ~' nhưng thường thiên về ví dụ hoặc mong muốn, còn 『とおりに』 là đúng theo thực tế, chỉ dẫn."
      ],
      mistakes: [
         { type: "warn", text: "Không dùng とおりに với những hành động không thể điều khiển (như mưa, gió…)." }
      ],
      tip: "Hãy nghĩ: とおり = 'theo đúng đường, đúng cách'."
   },
   {
      title: "どおりだ・どおりに (doori da / doori ni)",
      badges: ["JLPT N3", "Đúng như (dùng sau danh từ Hán + どおり)"],
      meaning: "Biến âm của とおり sau một số từ Hán, mang nghĩa 'đúng như / theo như'.",
      keywords: ["đúng như", "giống như"],
      structure: [
         "N（漢語）＋ どおりに／どおりだ"
      ],
      examples: [
         { jp: "計画どおりに進んでいる。", vi: "Mọi việc tiến triển đúng như kế hoạch." },
         { jp: "予想どおり、彼が勝った。", vi: "Đúng như dự đoán, anh ấy đã thắng." }
      ],
      compare: [
         "どおり chỉ xuất hiện với một số danh từ Hán (計画, 予想, 指示…), còn các danh từ khác dùng とおり."
      ],
      tip: "Coi どおり là cách đọc đặc biệt khi gắn với từ Hán."
   },
   {
      title: "によって (ni yotte)",
      badges: ["JLPT N3", "Tùy theo / Bởi / Vì"],
      meaning: "Diễn tả nguyên nhân, phương tiện, tác nhân hoặc sự khác nhau tùy trường hợp.",
      keywords: ["tùy theo", "bởi", "vì", "do"],
      structure: [
         "N ＋ によって",
         "N ＋ によっては"
      ],
      examples: [
         { jp: "努力によって成功した。", vi: "Anh ấy đã thành công nhờ nỗ lực." },
         { jp: "この小説は有名な作家によって書かれた。", vi: "Cuốn tiểu thuyết này được viết bởi một tác giả nổi tiếng." }
      ],
      compare: [
         "『で』 cũng chỉ phương tiện, nhưng 『によって』 trang trọng và dùng cho văn viết."
      ],
      mistakes: [
         { type: "warn", text: "Khi mang nghĩa 'do bởi (nguyên nhân)' thì không dùng với nguyên nhân tự nhiên (雨によって…). Thay bằng ～で." }
      ],
      tip: "Nghĩ: によって = 'tùy vào / nhờ vào / được bởi'."
   },
   {
      title: "によっては (ni yotte wa)",
      badges: ["JLPT N3", "Có trường hợp thì ~"],
      meaning: "Diễn tả có nhiều khả năng khác nhau, và tùy tình huống cụ thể mà có thể xảy ra kết quả đặc biệt.",
      keywords: ["tùy theo", "có lúc", "trong trường hợp"],
      structure: [
         "N ＋ によっては"
      ],
      examples: [
         { jp: "国によっては、法律が違う。", vi: "Tùy từng quốc gia mà luật pháp khác nhau." },
         { jp: "場合によっては、出発を延期するかもしれない。", vi: "Trong một số trường hợp, có thể sẽ hoãn khởi hành." }
      ],
      compare: [
         "『によって』 = tùy theo; 『によっては』 = có trường hợp đặc biệt (chọn ra trong nhiều khả năng)."
      ],
      tip: "Thường dùng khi muốn nói 'cũng có khả năng…'."
   },
   {
      title: "たびに (tabi ni)",
      badges: ["JLPT N3", "Mỗi khi"],
      meaning: "Diễn tả hành động B xảy ra lặp lại mỗi khi A xảy ra.",
      keywords: ["mỗi lần", "cứ ... thì ..."],
      structure: [
         "N の ＋ たびに",
         "Vる ＋ たびに"
      ],
      examples: [
         { "jp": "旅行のたびに、新しい友達ができる。", "vi": "Mỗi chuyến đi du lịch tôi lại có thêm bạn mới." },
         { "jp": "試験を受けるたびに緊張する。", "vi": "Mỗi lần đi thi tôi lại căng thẳng." }
      ],
      compare: [
         "『ごとに』 cũng nghĩa 'mỗi ~' nhưng thiên về đều đặn, 『たびに』 thiên về tính lặp đi lặp lại khi có dịp."
      ],
      tip: "たび = chuyến đi → nghĩ là 'cứ mỗi dịp thì…'."
   },
   {
      title: "ば～ほど (ba ~ hodo)",
      badges: ["JLPT N3", "Càng ... càng ..."],
      meaning: "Diễn tả mối quan hệ: khi A tăng thì B cũng tăng theo.",
      keywords: ["càng càng"],
      structure: [
         "Vば Vる ＋ ほど",
         "い形容詞ければ ＋ い形容詞い ＋ ほど",
         "な形容詞なら ＋ な形容詞な ＋ ほど"
      ],
      examples: [
         { "jp": "練習すればするほど上手になる。", "vi": "Càng luyện tập thì càng giỏi." },
         { "jp": "景色は美しければ美しいほど、写真に撮りたくなる。", "vi": "Cảnh càng đẹp thì càng muốn chụp ảnh." },
         { "jp": "静かなら静かなほど落ち着く。", "vi": "Càng yên tĩnh thì càng thấy bình tâm." }
      ],
      compare: [
         "『ば～ほど』 = mối quan hệ tăng dần song song, gần giống 'càng…càng…' trong tiếng Việt."
      ],
      tip: "Cứ hiểu: 'AばAほどB' = càng A thì càng B."
   },
   {
      title: "なら～ほど (nara ~ hodo)",
      badges: ["JLPT N3", "Càng ... thì càng ... (giả định)"],
      meaning: "Diễn tả nếu điều kiện A càng mạnh thì mức độ B càng lớn.",
      keywords: ["nếu ... thì càng ..."],
      structure: [
         "N なら ＋ なおさら ～ ほど"
      ],
      examples: [
         { jp: "若いなら若いほどいい。", vi: "Càng trẻ thì càng tốt." },
         { jp: "忙しい人なら人ほど時間の使い方が上手だ。", vi: "Người càng bận thì càng giỏi sắp xếp thời gian." }
      ],
      compare: [
         "Khá giống ば～ほど, nhưng 『なら～ほど』 nhấn mạnh vào sự so sánh giả định (nếu A thì càng B)."
      ],
      tip: "Nghĩ: 'nếu đã A thì càng A thì càng B'."
   },
   {
      title: "ほど (hodo)",
      badges: ["JLPT N3", "Đến mức / Không gì bằng"],
      meaning: "Diễn tả mức độ, so sánh hoặc sự cực hạn.",
      keywords: ["đến mức", "không gì bằng", "như"],
      structure: [
         "Vる／Vない ＋ ほど",
         "い形容詞い ＋ ほど",
         "N ＋ ほど"
      ],
      examples: [
         { "jp": "死ぬほど疲れた。", "vi": "Mệt đến mức muốn chết." },
         { "jp": "忙しいほど面白い。", "vi": "Càng bận thì càng thú vị." },
         { "jp": "彼ほど親切な人はいない。", "vi": "Không có ai tốt bụng bằng anh ấy." }
      ],
      compare: [
         "『くらい／ぐらい』 cũng có nghĩa 'đến mức', nhưng 『ほど』 mang sắc thái văn viết và nhấn mạnh hơn."
      ],
      tip: "ほど = chừng mực, mức độ."
   },
   {
      title: "ついでに (tsuideni)",
      badges: ["JLPT N3", "Nhân tiện"],
      meaning: "Diễn tả làm việc B trong khi làm A như là một việc tiện thể.",
      keywords: ["nhân tiện", "tiện thể"],
      structure: [
         "N の ＋ ついでに",
         "Vる／Vた ＋ ついでに"
      ],
      examples: [
         { jp: "散歩のついでに、牛乳を買ってきた。", vi: "Nhân tiện đi dạo tôi đã mua sữa." },
         { jp: "郵便局へ行ったついでに、切手を買った。", vi: "Nhân tiện ra bưu điện, tôi đã mua tem." },
         { jp: "散歩するついでに、コンビニでアイスを買った。", vi: "Nhân tiện đi dạo, tôi đã mua kem ở cửa hàng tiện lợi." }
      ],
      compare: [
         "『ながら』 cũng chỉ 'vừa A vừa B', nhưng 『ついでに』 nhấn mạnh B là việc thêm vào khi tiện A."
      ],
      tip: "Hãy nhớ: ついで = dịp tiện → 'tiện thể làm luôn'."
   },
   {
      title: "くらいだ・ぐらいだ (kurai da / gurai da)",
      badges: ["JLPT N3", "Đến mức"],
      meaning: "Diễn tả mức độ sự việc, thường dùng để cường điệu cảm xúc hoặc tình huống.",
      keywords: ["đến mức", "cỡ như", "tới mức"],
      structure: [
         "Vる／Vない ＋ くらいだ／ぐらいだ",
         "い形容詞い ＋ くらいだ／ぐらいだ",
         "N ＋ くらいだ／ぐらいだ"
      ],
      examples: [
         { jp: "立っていられないくらい疲れた。", vi: "Mệt đến mức không đứng nổi." },
         { jp: "死ぬぐらい痛かった。", vi: "Đau đến mức muốn chết." }
      ],
      compare: [
         "『ほどだ』 cũng diễn tả mức độ, nhưng 『くらいだ／ぐらいだ』 thiên về văn nói hơn."
      ],
      tip: "くらい／ぐらい = 'đến mức độ ~'."
   },
   {
      title: "くらい・ぐらい (kurai / gurai)",
      badges: ["JLPT N3", "Chỉ mức độ / Khoảng"],
      meaning: "Chỉ mức độ, số lượng hoặc khoảng chừng.",
      keywords: ["khoảng", "cỡ", "tầm"],
      structure: [
         "N ＋ くらい／ぐらい",
         "Số lượng ＋ くらい／ぐらい"
      ],
      examples: [
         { jp: "一時間くらい待ちました。", vi: "Tôi đã đợi khoảng một tiếng." },
         { jp: "子供でもできるぐらい簡単だ。", vi: "Đơn giản đến mức trẻ con cũng làm được." }
      ],
      compare: [
         "『ほど』 cũng có thể chỉ mức độ, nhưng 『くらい／ぐらい』 thường dùng hơn trong văn nói."
      ],
      tip: "Cứ nhớ: くらい = ước lượng số lượng hoặc mức độ."
   },
   {
      title: "ほどだ (hodo da)",
      badges: ["JLPT N3", "Đến mức"],
      meaning: "Dùng để nhấn mạnh mức độ giống như くらいだ, nhưng thiên về văn viết hoặc sắc thái mạnh hơn.",
      keywords: ["đến mức", "cỡ như"],
      structure: [
         "Vる／Vない ＋ ほどだ",
         "い形容詞い ＋ ほどだ",
         "N ＋ ほどだ"
      ],
      examples: [
         { jp: "涙が出るほど感動した。", vi: "Xúc động đến mức rơi nước mắt." },
         { jp: "死ぬほど練習した。", vi: "Luyện tập đến mức muốn chết." }
      ],
      compare: [
         "『くらいだ』 = văn nói, 『ほどだ』 = văn viết, mạnh mẽ hơn."
      ],
      tip: "ほど = nhấn mạnh giới hạn cực độ."
   },
   {
      title: "くらい～はない・ぐらい～はない (kurai wa nai / gurai wa nai)",
      badges: ["JLPT N3", "Không gì bằng"],
      meaning: "Nhấn mạnh không có gì (ai, việc, điều) giống A đến mức đó.",
      keywords: ["không gì bằng", "chẳng có gì"],
      structure: [
         "N ＋ くらい～はない／ぐらい～はない"
      ],
      examples: [
         { jp: "彼女くらい親切な人はいない。", vi: "Không có ai tốt bụng bằng cô ấy." },
         { jp: "試験ぐらい嫌なものはない。", vi: "Không có gì đáng ghét bằng thi cử." }
      ],
      compare: [
         "『ほど～はない』 dùng nhiều trong văn viết, 『くらい～はない／ぐらい～はない』 thiên về văn nói."
      ],
      tip: "Dạng so sánh cực hạn: 'không gì ... bằng'."
   },
   {
      title: "ほど～はない (hodo wa nai)",
      badges: ["JLPT N3", "Không gì bằng"],
      meaning: "Dùng để so sánh cực hạn, nhấn mạnh A là nhất.",
      keywords: ["không gì bằng", "nhất là"],
      structure: [
         "N ＋ ほど～はない"
      ],
      examples: [
         { jp: "犬ほどかわいい動物はない。", vi: "Không có con vật nào dễ thương bằng chó." },
         { jp: "読書ほど面白い趣味はない。", vi: "Không có sở thích nào thú vị bằng đọc sách." }
      ],
      compare: [
         "Giống くらい～はない nhưng 『ほど～はない』 nghe khách quan và trang trọng hơn."
      ],
      tip: "ほど～はない = 'không gì bằng N'."
   },
   {
      title: "くらいなら・ぐらいなら (kurai nara / gurai nara)",
      badges: ["JLPT N3", "Nếu phải A thì thà B"],
      meaning: "Diễn tả thái độ chọn lựa: nếu rơi vào tình huống A thì thà chọn B tốt hơn.",
      keywords: ["thà ... còn hơn"],
      structure: [
         "Vる ＋ くらいなら／ぐらいなら"
      ],
      examples: [
         { jp: "そんなことをするくらいなら、死んだほうがましだ。", vi: "Nếu phải làm chuyện đó thì thà chết còn hơn." },
         { jp: "一人で行くぐらいなら、行かない。", vi: "Nếu phải đi một mình thì tôi không đi." }
      ],
      compare: [
         "『よりは』 cũng có nghĩa 'thà B còn hơn A', nhưng 『くらいなら』 mạnh mẽ và quyết liệt hơn."
      ],
      tip: "くらいなら = 'nếu đến mức phải A thì thà B'."
   },
   {
      title: "に限る (ni kagiru)",
      badges: ["JLPT N3", "Chỉ có / Tốt nhất là"],
      meaning: "Diễn tả lựa chọn tốt nhất, không có gì hơn được.",
      keywords: ["tốt nhất", "chỉ có", "không gì bằng"],
      structure: [
         "N ＋ に限る",
         "Vる／Vない ＋ に限る"
      ],
      examples: [
         { jp: "寒い時は、鍋に限る。", vi: "Lúc trời lạnh thì ăn lẩu là nhất." },
         { jp: "風邪をひいたら、早く寝るに限る。", vi: "Khi bị cảm thì tốt nhất là ngủ sớm." }
      ],
      compare: [
         "『ほど～はない』 thiên về so sánh khách quan, 『に限る』 thiên về ý kiến, lựa chọn chủ quan."
      ],
      tip: "に限る = 'tốt nhất là ~'."
   },
   {
      title: "に対して (ni taishite)",
      badges: ["JLPT N3", "Đối với / Trái ngược với"],
      meaning: "Dùng để chỉ đối tượng hướng tới của hành động, hoặc để so sánh, đối lập giữa hai sự việc.",
      keywords: ["đối với", "cho", "ngược lại"],
      structure: [
         "N ＋ に対して",
         "N ＋ に対する ＋ N"
      ],
      examples: [
         { jp: "先生に対して敬語を使う。", vi: "Đối với thầy giáo thì dùng kính ngữ." },
         { jp: "兄は外向的なのに対して、弟は内向的だ。", vi: "Anh trai thì hướng ngoại, ngược lại em trai thì hướng nội." }
      ],
      compare: [
         "『にとって』 = quan điểm cá nhân; 『に対して』 = hướng hành động hoặc sự đối lập."
      ],
      mistakes: [
         { type: "warn", text: "Không nhầm với にとって (theo quan điểm)." }
      ],
      tip: "に対して = 'đối với / ngược lại với'."
   },
   {
      title: "反面 (hanmen)",
      badges: ["JLPT N2", "Mặt khác / Ngược lại"],
      meaning: "Diễn tả một sự vật có hai mặt đối lập: tích cực và tiêu cực, hoặc hai tính chất trái ngược.",
      keywords: ["ngược lại", "mặt khác", "trái lại"],
      structure: [
         "普通形 (N/Na bỏだ) ＋ 反面"
      ],
      examples: [
         { jp: "この薬はよく効く反面、副作用もある。", vi: "Thuốc này có tác dụng tốt nhưng mặt khác cũng có tác dụng phụ." },
         { jp: "都会は便利な反面、ストレスも多い。", vi: "Thành phố tiện lợi nhưng ngược lại cũng nhiều căng thẳng." }
      ],
      compare: [
         "『一方で』 cũng so sánh hai mặt, nhưng 反面 thiên về nhấn mạnh sự đối lập rõ ràng."
      ],
      tip: "反面 = 'một mặt… nhưng mặt khác…'."
   },
   {
      title: "一方で (ippou de)",
      badges: ["JLPT N2", "Mặt khác / Đồng thời"],
      meaning: "Diễn tả sự so sánh, đối lập, hoặc hai sự việc cùng tồn tại song song.",
      keywords: ["một mặt", "mặt khác", "đồng thời"],
      structure: [
         "普通形 (N/Na bỏだ) ＋ 一方で"
      ],
      examples: [
         { jp: "彼は教師である一方で、小説家でもある。", vi: "Anh ấy vừa là giáo viên, mặt khác cũng là tiểu thuyết gia." },
         { jp: "仕事が忙しい一方で、やりがいもある。", vi: "Công việc bận rộn nhưng mặt khác cũng có nhiều động lực." }
      ],
      compare: [
         "『反面』 nhấn mạnh sự trái ngược; 『一方で』 có thể chỉ đơn thuần là song song, không hẳn trái nghĩa."
      ],
      tip: "一方で = 'một mặt thì…, đồng thời mặt khác cũng…'."
   },
   {
      title: "というより (to iu yori)",
      badges: ["JLPT N3", "Đúng hơn là / Thay vì nói là"],
      meaning: "Dùng khi muốn chỉnh lại cách diễn đạt cho chính xác hơn, thay vì A thì nói B đúng hơn.",
      keywords: ["đúng hơn là", "nói chính xác hơn là"],
      structure: [
         "普通形 ＋ というより"
      ],
      examples: [
         { jp: "あの人は友達というより、ライバルだ。", vi: "Người đó đúng hơn là đối thủ chứ không phải bạn." },
         { jp: "寒いというより、むしろ冷たい。", vi: "Nói lạnh thì đúng hơn là buốt." }
      ],
      compare: [
         "『というか』 cũng chỉnh lại cách nói, nhưng 『というより』 trang trọng và dứt khoát hơn."
      ],
      tip: "というより = 'nói B thì chính xác hơn A'."
   },
   {
      title: "代わりに (kawari ni)",
      badges: ["JLPT N3", "Thay cho / Đổi lại"],
      meaning: "Diễn tả việc thay thế cho một sự việc khác, hoặc đổi lại có một sự bù trừ tương xứng.",
      keywords: ["thay cho", "thay vì", "đổi lại"],
      structure: [
         "N の ＋ 代わりに",
         "Vる／Vた ＋ 代わりに"
      ],
      examples: [
         { jp: "母の代わりに私が料理を作った。", vi: "Tôi đã nấu ăn thay cho mẹ." },
         { jp: "自由に旅行できる代わりに、お金がかかる。", vi: "Được đi du lịch tự do, đổi lại thì tốn tiền." }
      ],
      compare: [
         "『かわりに』 có thể chỉ đơn thuần là thay thế, hoặc cũng có thể là trao đổi qua lại (đổi lại)."
      ],
      tip: "代わりに = 'thay cho / đổi lại'."
   },
   {
      title: "ためだ・ために (tame da / tame ni)",
      badges: ["JLPT N3", "Vì / Do / Để"],
      meaning: "Diễn tả nguyên nhân, lý do (do ~ nên) hoặc mục đích (để ~).",
      keywords: ["vì", "do", "bởi vì", "để"],
      structure: [
         "Vる / Vた ＋ ため（に）",
         "N の ＋ ため（に）",
         "Aな ＋ ため（に）"
      ],
      examples: [
         { jp: "大雨のために、試合は中止になった。", vi: "Vì mưa lớn nên trận đấu bị hoãn." },
         { jp: "健康のために、毎日運動しています。", vi: "Tôi tập thể dục hằng ngày để tốt cho sức khỏe." },
         { jp: "静かなために、よく眠れました。", vi: "Vì yên tĩnh nên tôi ngủ ngon." }
      ],
      compare: [
         "Giống với ので nhưng trang trọng hơn.",
         "Khác với ように: ために thiên về mục đích rõ ràng."
      ],
      tip: "Nghĩ ために = 'do ~ nên' hoặc 'để ~'."
   },
   {
      title: "によって・による (ni yotte / ni yoru)",
      badges: ["JLPT N3", "Bởi / Tùy vào / Vì"],
      meaning: "Diễn tả phương thức, tác nhân, nguyên nhân hoặc sự thay đổi tùy đối tượng.",
      keywords: ["bởi", "do", "tùy vào", "bằng cách"],
      structure: [
         "N ＋ によって",
         "N ＋ による N"
      ],
      examples: [
         { jp: "この絵は有名な画家によって描かれました。", vi: "Bức tranh này được vẽ bởi một họa sĩ nổi tiếng." },
         { jp: "結果は努力によるものだ。", vi: "Kết quả là nhờ nỗ lực mà có." }
      ],
      compare: [
         "に = bởi (hành động cụ thể); によって = bởi (tác nhân rộng hơn, trừu tượng)."
      ],
      tip: "により = cách viết trang trọng của によって."
   },
   {
      title: "から・ことから (kara / koto kara)",
      badges: ["JLPT N3", "Vì / Do / Từ việc"],
      meaning: "Diễn tả nguyên nhân, lý do dựa trên một sự thật, hoặc xuất phát điểm.",
      keywords: ["vì", "do", "từ việc", "bắt nguồn từ"],
      structure: [
         "V普通形 ＋ ことから",
         "N ＋ から"
      ],
      examples: [
         { jp: "富士山が見えることから、この町は観光客に人気だ。", vi: "Vì có thể nhìn thấy núi Phú Sĩ nên thị trấn này nổi tiếng với khách du lịch." },
         { jp: "日本に行ったことから、日本語を勉強し始めた。", vi: "Vì đã đi Nhật nên tôi bắt đầu học tiếng Nhật." }
      ],
      compare: [
         "から = nguyên nhân trực tiếp, đơn giản; ことから = nguyên nhân dựa trên sự thật, lý luận."
      ]
   },
   {
      title: "おかげだ・おかげで・せいだ・せいで (okage da / seida)",
      badges: ["JLPT N3", "Nhờ / Tại vì"],
      meaning: "Dùng để diễn tả nguyên nhân dẫn đến kết quả tốt (おかげで) hoặc xấu (せいで).",
      keywords: ["nhờ", "may mà", "tại vì", "do"],
      structure: [
         "N の ＋ おかげで／せいで",
         "V普通形 ＋ おかげで／せいで"
      ],
      examples: [
         { jp: "友達のおかげで、宿題が早く終わった。", vi: "Nhờ bạn mà tôi làm xong bài tập sớm." },
         { jp: "雨が降ったせいで、試合は中止になった。", vi: "Tại mưa nên trận đấu bị hoãn." }
      ],
      compare: [
         "おかげで = kết quả tốt, せいで = kết quả xấu."
      ]
   },
   {
      title: "のだから (no dakara)",
      badges: ["JLPT N3", "Bởi vì / Đương nhiên"],
      meaning: "Diễn tả lý do rõ ràng, người nghe cũng nên hiểu, thường dùng để nhấn mạnh hoặc giải thích.",
      keywords: ["bởi vì", "đương nhiên"],
      structure: [
         "V普通形 ＋ のだから",
         "Aい／Aな／N ＋ のだから"
      ],
      examples: [
         { jp: "子供なのだから、できなくても仕方がない。", vi: "Vì là trẻ con nên không làm được cũng là chuyện đương nhiên." },
         { jp: "明日は休みなのだから、ゆっくり休んでください。", vi: "Ngày mai là ngày nghỉ nên cứ từ từ nghỉ ngơi đi." }
      ]
   },
   {
      title: "（の）なら (nara)",
      badges: ["JLPT N3", "Nếu / Trong trường hợp"],
      meaning: "Dùng khi dựa vào điều kiện/giả định đã biết từ trước để đưa ra phản ứng, ý kiến.",
      keywords: ["nếu", "giả sử", "trong trường hợp"],
      structure: [
         "N ＋ なら",
         "V普通形／Aい／Aな ＋ のなら"
      ],
      examples: [
         { jp: "日本に行くなら、京都に行ったほうがいいよ。", vi: "Nếu đi Nhật thì nên đến Kyoto." },
         { jp: "君が行くのなら、私も行きます。", vi: "Nếu cậu đi thì tớ cũng đi." }
      ]
   },
   {
      title: "ては・（の）では (te wa / no dewa)",
      badges: ["JLPT N3", "Nếu ~ thì (kết quả xấu)"],
      meaning: "Dùng khi muốn diễn tả giả định về tình huống không tốt, dẫn đến kết quả tiêu cực.",
      keywords: ["nếu mà", "trong trường hợp mà", "không ổn"],
      structure: [
         "Vて ＋ は",
         "N／Aな ＋ では"
      ],
      examples: [
         { jp: "そんなに遊んでばかりいては、試験に合格できない。", vi: "Nếu chỉ toàn chơi như thế thì không thể đậu kỳ thi." },
         { jp: "証拠がなければ、彼を捕まえるのでは無理だ。", vi: "Nếu không có bằng chứng thì không thể bắt anh ta." }
      ]
   },
   {
      title: "さえ～ば・さえ～なら (sae ~ ba / sae ~ nara)",
      badges: ["JLPT N3", "Chỉ cần ~ thì"],
      meaning: "Diễn tả điều kiện tối thiểu, chỉ cần A thì B cũng đủ.",
      keywords: ["chỉ cần", "miễn là"],
      structure: [
         "N ＋ さえ ＋ Vば",
         "Vます bỏ ます ＋ さえすれば",
         "Aな／N でさえあれば"
      ],
      examples: [
         { jp: "君さえいれば、何もいらない。", vi: "Chỉ cần có em thì không cần gì nữa." },
         { jp: "勉強しさえすれば、合格できます。", vi: "Chỉ cần học thì có thể đỗ." },
         { jp: "健康でさえあれば、何でもできる。", vi: "Chỉ cần khỏe mạnh thì làm gì cũng được." }
      ]
   },
   {
      title: "たとえ～ても・たとえ～でも (tatoe ~ temo / tatoe ~ demo)",
      badges: ["JLPT N3", "Cho dù / Dẫu cho"],
      meaning: "Diễn tả điều kiện giả định, cho dù xảy ra thì kết quả vẫn không đổi.",
      keywords: ["cho dù", "dẫu cho", "ngay cả khi"],
      structure: [
         "たとえ Vて ＋ も",
         "たとえ Aくて ＋ も",
         "たとえ N／Aな ＋ でも"
      ],
      examples: [
         { jp: "たとえ雨が降っても、試合は行います。", vi: "Cho dù trời mưa thì trận đấu vẫn diễn ra." },
         { jp: "たとえ忙しくても、運動する時間を作ります。", vi: "Cho dù bận đến đâu tôi cũng dành thời gian tập thể dục." },
         { jp: "たとえ子供でも、この問題は解ける。", vi: "Ngay cả là trẻ con cũng giải được bài này." }
      ]
   },
   {
      title: "ば・たら・なら (ba / tara / nara)",
      badges: ["JLPT N3", "Nếu / Khi"],
      meaning: "Các cách diễn đạt điều kiện: ば (giả định logic), たら (điều kiện thực tế), なら (điều kiện dựa trên thông tin).",
      keywords: ["nếu", "khi", "giả sử"],
      structure: [
         "Vば",
         "Vたら",
         "Nなら"
      ],
      examples: [
         { jp: "勉強すれば、合格できます。", vi: "Nếu học thì có thể đỗ." },
         { jp: "雨が降ったら、出かけません。", vi: "Nếu trời mưa thì tôi sẽ không ra ngoài." },
         { jp: "彼なら知っているはずだ。", vi: "Nếu là anh ấy thì chắc chắn biết." }
      ],
      compare: [
         "ば = giả định có tính logic; たら = điều kiện có khả năng xảy ra; なら = dựa trên tình huống đã biết."
      ]
   },
   {
      title: "ということだ (to iu koto da)",
      badges: ["JLPT N3", "Nghe nói / Có nghĩa là"],
      meaning: "Diễn tả lại thông tin mình nghe được, hoặc giải thích ý nghĩa.",
      keywords: ["nghe nói", "nghĩa là", "tức là"],
      structure: [
         "V普通形 / Aい / Aな / N + ということだ"
      ],
      examples: [
         { jp: "天気予報によると、明日は雨だということだ。", vi: "Theo dự báo thời tiết thì nghe nói mai trời mưa." }
      ],
      compare: [
         "＝そうだ (nghe nói) nhưng ということだ trang trọng và hay dùng trong văn viết hơn."
      ],
      tip: "Hãy nhớ = 'tóm lại, ý là, nghe nói'."
   },
   {
      title: "とのことだ (to no koto da)",
      badges: ["JLPT N3", "Nghe nói (trang trọng)"],
      meaning: "Dùng để truyền đạt thông tin nghe được, trang trọng hơn ということだ.",
      keywords: ["nghe nói", "truyền đạt", "trang trọng"],
      structure: [
         "V普通形 / Aい / Aな / N + とのことだ"
      ],
      examples: [
         { jp: "部長は今日は欠席するとのことです。", vi: "Nghe nói trưởng phòng hôm nay sẽ vắng mặt." }
      ],
      compare: [
         "『とのことだ』 lịch sự và trang trọng hơn 『ということだ』, hay dùng trong email, tin tức."
      ],
      tip: "Hãy nghĩ đây là cách nói gián tiếp lịch sự khi truyền đạt thông tin."
   },
   {
      title: "と言われている (to iwarete iru)",
      badges: ["JLPT N3", "Người ta nói rằng"],
      meaning: "Dùng để diễn đạt một ý kiến, quan niệm, tin đồn mà mọi người thường nói.",
      keywords: ["người ta nói", "được cho là"],
      structure: [
         "V普通形 / Aい / Aな / N + と言われている"
      ],
      examples: [
         { jp: "この薬はよく効くと言われている。", vi: "Người ta nói rằng thuốc này rất hiệu nghiệm." }
      ],
      compare: [
         "『と言われている』 nhấn mạnh tính truyền miệng, không chắc chắn. Khác 『ということだ』 thường dựa vào nguồn cụ thể."
      ],
      tip: "Dùng khi không rõ ai nói, chỉ là quan niệm chung."
   },
   {
      title: "とか (toka)",
      badges: ["JLPT N3", "Ví dụ / Nghe nói"],
      meaning: "Dùng để đưa ví dụ không toàn diện, hoặc nghe nói (chưa chắc chắn).",
      keywords: ["ví dụ", "chẳng hạn", "nghe nói"],
      structure: [
         "N とか N とか",
         "V普通形 とか"
      ],
      examples: [
         { jp: "週末は映画とか買い物とかをします。", vi: "Cuối tuần tôi thường xem phim, đi mua sắm chẳng hạn." },
         { jp: "田中さんは来週結婚するとか。", vi: "Nghe nói anh Tanaka tuần sau sẽ cưới." }
      ],
      compare: [
         "『や』 = liệt kê ví dụ, trung tính. 『とか』 = liệt kê nhưng cảm giác xuề xòa, thân mật hơn."
      ],
      tip: "とか = 'như là ~, chẳng hạn' hoặc 'nghe đâu là ~'."
   },
   {
      title: "って (tte)",
      badges: ["JLPT N3", "Trích dẫn / Chủ đề"],
      meaning: "Dạng rút gọn thân mật của という, と言う. Dùng để trích dẫn lời nói hoặc nêu chủ đề.",
      keywords: ["nói rằng", "chủ đề", "nghe nói"],
      structure: [
         "V普通形 / Aい / Aな / N + って",
         "N + って + N"
      ],
      examples: [
         { jp: "明日雨が降るって。", vi: "Nghe nói mai trời mưa đó." },
         { jp: "田中って人を知っていますか。", vi: "Bạn có biết người tên Tanaka không?" }
      ],
      compare: [
         "『って』 = ngắn gọn, thân mật. Trong văn viết trang trọng nên dùng 『という』 hay 『と』."
      ],
      tip: "Nghĩ đơn giản: って = nói là / tên là."
   },
   {
      title: "という (to iu)",
      badges: ["JLPT N3", "Ngữ pháp đa nghĩa"],
      meaning: "Dùng để: (1) giải thích tên gọi, (2) truyền đạt thông tin/nghe nói rằng, (3) nhấn mạnh hoặc tóm tắt một khái niệm.",
      keywords: ["gọi là", "nghe nói", "cái gọi là"],
      structure: [
         "N1 という N2  (cái gọi là N2 tên là N1)",
         "... という  (nghe nói rằng~ / rằng~)"
      ],
      examples: [
         { jp: "これは『花子』という本です。", vi: "Đây là cuốn sách có tên là 'Hanako'." },
         { jp: "田中さんは来週結婚するという。", vi: "Nghe nói anh Tanaka tuần sau sẽ cưới." },
         { jp: "人間というのは弱いものだ。", vi: "Cái gọi là con người vốn là sinh vật yếu đuối." }
      ],
      compare: [
         "『という』 = cách nói chuẩn, trang trọng.",
         "『って』 = dạng rút gọn, thường dùng trong hội thoại thân mật.",
         "『そうだ』 = nghe nói (dùng để truyền đạt lại thông tin) nhưng không dùng để đặt tên."
      ],
      tip: "という có 3 nghĩa chính: (1) gọi là/tên là, (2) nghe nói rằng, (3) cái gọi là ~ (nhấn mạnh/khái niệm)."
   },
   {
      title: "はずがない (hazuganai)",
      badges: ["JLPT N3", "Không thể nào"],
      meaning: "Diễn tả sự phủ định mạnh mẽ, khẳng định việc đó chắc chắn không thể xảy ra.",
      keywords: ["không thể nào", "tuyệt đối không"],
      structure: [
         "Vる ＋ はずがない",
         "Vた ＋ はずがない",
         "Vない ＋ はずがない",
         "い形容詞い ＋ はずがない",
         "な形容詞な ＋ はずがない",
         "N の ＋ はずがない"
      ],
      examples: [
         { jp: "彼が来るはずがない。", vi: "Anh ta làm sao mà đến được." },
         { jp: "彼女がそんなことを言ったはずがない。", vi: "Cô ấy làm sao mà nói điều đó." },
         { jp: "そんな難しい問題が解けないはずがない。", vi: "Không thể nào mà không giải được bài khó đó." },
         { jp: "あの映画が面白いはずがない。", vi: "Không thể nào bộ phim đó hay được." },
         { jp: "彼が不親切なはずがない。", vi: "Anh ấy không thể nào không tử tế." },
         { jp: "彼が犯人のはずがない。", vi: "Anh ấy không thể nào là thủ phạm." }
      ],
      tip: "はず = 'đáng lẽ, lẽ ra', thêm がない → 'không thể nào'."
   },
   {
      title: "わけがない (wakeganai)",
      badges: ["JLPT N3", "Làm sao có chuyện"],
      meaning: "Dùng để phủ định, nhấn mạnh điều gì đó không thể xảy ra (giống はずがない, nhưng thường khẩu ngữ hơn).",
      keywords: ["không đời nào", "sao có thể"],
      structure: [
         "Vる ＋ わけがない",
         "Vた ＋ わけがない",
         "Vない ＋ わけがない",
         "い形容詞い ＋ わけがない",
         "な形容詞な ＋ わけがない",
         "N の ＋ わけがない"
      ],
      examples: [
         { jp: "彼がそんなことをするわけがない。", vi: "Anh ta làm sao có chuyện làm việc đó." },
         { jp: "彼女が嘘をついたわけがない。", vi: "Cô ấy không đời nào nói dối." },
         { jp: "失敗しないわけがない。", vi: "Không thể nào mà không thất bại." },
         { jp: "この料理がおいしいわけがない。", vi: "Món này làm sao ngon được." },
         { jp: "彼が下手なわけがない。", vi: "Anh ấy làm sao mà dở được." },
         { jp: "彼が犯人のわけがない。", vi: "Anh ấy không thể nào là thủ phạm." }
      ],
      compare: [
         "『はずがない』 = suy luận logic, 『わけがない』 = cảm xúc mạnh, phủ định chắc nịch."
      ],
      tip: "Hãy nhớ = 'làm gì có chuyện ~'."
   },
   {
      title: "～とは限らない (to wa kagiranai)",
      badges: ["JLPT N3", "Không hẳn lúc nào cũng"],
      meaning: "Diễn tả không phải lúc nào cũng đúng, không thể khẳng định chắc chắn.",
      keywords: ["không nhất thiết", "không phải lúc nào cũng"],
      structure: [
         "V普通形 ＋ とは限らない",
         "い形容詞い ＋ とは限らない",
         "な形容詞だ ＋ とは限らない",
         "Nだ ＋ とは限らない"
      ],
      examples: [
         { jp: "高いものが必ずいいとは限らない。", vi: "Đồ đắt chưa chắc đã tốt." },
         { jp: "便利とは限らない。", vi: "Chưa chắc đã tiện lợi." },
         { jp: "安全だとは限らない。", vi: "Chưa chắc đã an toàn." },
         { jp: "日本人だから礼儀正しいとは限らない。", vi: "Không phải cứ là người Nhật thì lúc nào cũng lịch sự." }
      ],
      tip: "Nghĩ như: 'không thể chắc chắn 100%'."
   },
   {
      title: "わけではない / というわけではない / のではない",
      badges: ["JLPT N3", "Không hẳn là / Không có nghĩa là"],
      meaning: "Diễn tả phủ định một phần, không hoàn toàn đúng như vậy.",
      keywords: ["không hẳn là", "không có nghĩa là"],
      structure: [
         "V普通形 ＋ わけではない",
         "い形容詞い ＋ わけではない",
         "な形容詞な ＋ わけではない",
         "Nの ＋ わけではない",
         "V普通形 ＋ というわけではない",
         "V普通形 ＋ のではない"
      ],
      examples: [
         { jp: "全部わかるわけではない。", vi: "Không hẳn là hiểu hết." },
         { jp: "高いわけではない。", vi: "Không hẳn là đắt." },
         { jp: "便利なわけではない。", vi: "Không hẳn là tiện lợi." },
         { jp: "日本人のわけではない。", vi: "Không hẳn là người Nhật." },
         { jp: "行きたくないというわけではない。", vi: "Không phải là không muốn đi." },
         { jp: "難しいのではない。", vi: "Không phải là khó." }
      ],
      compare: [
         "『わけがない』 = hoàn toàn không thể, 『わけではない』 = không hoàn toàn đúng."
      ],
      tip: "Nghĩ như: 'không hẳn đúng như bạn nghĩ'."
   },
   {
      title: "ないことはない (nai koto wa nai)",
      badges: ["JLPT N3", "Cũng không hẳn là không"],
      meaning: "Dùng để khẳng định yếu, thừa nhận một phần (tức là 'có, nhưng ít/không nhiều').",
      keywords: ["cũng không hẳn là không", "không phải là không"],
      structure: [
         "Vないことはない",
         "い形容詞くないことはない",
         "な形容詞でないことはない"
      ],
      examples: [
         { jp: "食べないことはない。", vi: "Không phải là tôi không ăn (tức là có thể ăn)." },
         { jp: "高くないことはない。", vi: "Không phải là không đắt (tức là cũng khá đắt)." },
         { jp: "不便でないことはない。", vi: "Không phải là không bất tiện." }
      ],
      tip: "Ngược nghĩa nhẹ của 『～ない』 → có khả năng, nhưng không nhiều."
   },
   {
      title: "ことは～が (koto wa ... ga)",
      badges: ["JLPT N3", "Cũng có... nhưng"],
      meaning: "Diễn tả sự thừa nhận một điều, nhưng thêm vào hạn chế, phủ định nhẹ.",
      keywords: ["có ... nhưng", "dù ... nhưng"],
      structure: [
         "VることはVるが",
         "い形容詞いことはい形容詞いが",
         "な形容詞なことはな形容詞だが"
      ],
      examples: [
         { jp: "行くことは行くが、あまり気が進まない。", vi: "Đi thì có đi, nhưng không hứng thú lắm." },
         { jp: "高いことは高いが、質がいい。", vi: "Đắt thì có đắt, nhưng chất lượng tốt." },
         { jp: "便利なことは便利だが、値段が高い。", vi: "Tiện thì có tiện, nhưng giá cao." }
      ],
      tip: "Công thức: Thừa nhận A nhưng đưa ra hạn chế B."
   },
];