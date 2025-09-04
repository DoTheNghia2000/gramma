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
];