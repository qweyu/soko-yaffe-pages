      var CATS = [
        "Vegetables",
        "Fruits",
        "Grains and legumes",
        "Poultry and eggs",
        "Goats and sheep",
        "Pigs",
        "Rabbits",
        "Dairy",
        "Herbal Plants",
        "Seeds",
        "Others",
      ];
      var DISTS = [ 
            "Buikwe","Bukomansimbi","Butambala","Buvuma","Gomba","Kalangala",
            "Kalungu","Kassanda","Kayunga","Kiboga","Kyankwanzi","Kyotera",
            "Luweero","Lwengo","Lyantonde","Masaka","Mityana","Mpigi","Mubende",
            "Mukono","Nakaseke","Nakasongola","Rakai","Ssembabule","Wakiso",
           "Amuria","Budaka","Bududa","Bugiri","Bugweri","Bukedea","Bukwo",
            "Bulambuli","Busia","Butaleja","Butebo","Buyende","Iganga","Jinja",
            "Kaberamaido","Kalaki","Kaliro","Kamuli","Kapchorwa","Kapelebyong",
            "Katakwi","Kibuku","Kumi","Kween","Luuka","Manafwa","Mayuge","Mbale",
            "Namayingo","Namisindwa","Namutumba","Ngora","Pallisa","Serere",
            "Sironko","Soroti","Tororo","Abim","Adjumani","Agago","Alebtong",
            "Amolatar","Amudat","Amuru","Apac","Arua","Dokolo","Gulu ","Kaabong",
            "Karenga","Kitgum","Koboko","Kole","Kotido","Kwania","Lamwo","Lira",
            "Madi-Okollo","Maracha","Moroto","Moyo","Nabilatuk","Nakapiripirit",
            "Napak","Nebbi","Nwoya","Obongi","Omoro","Otuke","Oyam","Pader","Pakwach",
            "Terego","Yumbe","Zombo","Buhweju","Buliisa","Bundibugyo","Bunyangabu",
            "Bushenyi","Hoima","Ibanda","Isingiro","Kabale","Kabarole","Kagadi",
            "Kakumiro","Kamwenge","Kanungu","Kasese","Kazo","Kibaale","Kikuube",
            "Kiruhura","Kiryandongo","Kisoro","Kitagwenda","Kyegegwa","Kyenjojo",
            "Masindi","Mbarara","Mitooma","Ntoroko","Ntungamo","Rubanda","Rubirizi",
            "Rukiga","Rukungiri","Rwampara","Sheema"           
        ];
      var seed = [
        {
          id: 1,
          seller: "Namusoke Grace",
          item: "Matooke (bunches)",
          cat: "Fruits",
          qty: "40 bunches",
          price: 18000,
          dist: "Masaka",
          phone: "0700000001",
          note: "Big green bunches, can deliver to Kampala.",
          t: 6,
        },
        {
          id: 2,
          seller: "Okello David",
          item: "Eggs (trays of 30)",
          cat: "Poultry and eggs",
          qty: "60 trays",
          price: 10500,
          dist: "Gulu",
          phone: "0700000002",
          note: "Fresh daily from free-range hens.",
          t: 5,
        },
        {
          id: 3,
          seller: "Akello Joyce",
          item: "Goats (live)",
          cat: "Goats and sheep",
          qty: "12 goats",
          price: 220000,
          dist: "Mbarara",
          phone: "0700000003",
          note: "Boer cross, 8 to 10 months.",
          t: 4,
        },
        {
          id: 4,
          seller: "Mukasa Peter",
          item: "Maize grain",
          cat: "Grains and legumes",
          qty: "2 tonnes",
          price: 1100,
          dist: "Mukono",
          phone: "0700000004",
          note: "Dry, per kg. Bring your own bags.",
          t: 3,
        },
        {
          id: 5,
          seller: "Nambi Sarah",
          item: "Tomatoes",
          cat: "Vegetables",
          qty: "30 crates",
          price: 45000,
          dist: "Wakiso",
          phone: "0700000005",
          note: "Per crate. Harvested this morning.",
          t: 2,
        },
        {
          id: 6,
          seller: "Wanyama Isaac",
          item: "Rabbits (meat)",
          cat: "Rabbits",
          qty: "15 rabbits",
          price: 35000,
          dist: "Mbale",
          phone: "0700000006",
          note: "New Zealand White, 4 months.",
          t: 1,
        },
        {
          id: 7,
          seller: "Kato Moses",
          item: "Pig weaners",
          cat: "Pigs",
          qty: "10 weaners",
          price: 150000,
          dist: "Jinja",
          phone: "0700000007",
          note: "Large White cross, dewormed.",
          t: 0,
        },
        {
          id: 8,
          seller: "Kweyu Patrick",
          item: "Jack Fruit",
          cat: "Fruits",
          qty: "20 pieces",
          price: 4000,
          dist: "Busia",
          phone: "0748944858",
          note: "Big size and ripe, can deliver to Kampala.",
          t: 6,
        },
          {
          id: 1,
          seller: "Ojuka Emmanuel Boya",
          item: "Cowpeas",
          cat: "Legumes",
          qty: "200 Kgs",
          price: 3500,
          dist: "Gulu",
          phone: "0703540356",
          note: "Fresh peas straight from the garden",
          t: 0,
        },
      ];
      var PRICES = [
        [
          "Matooke (bunch)",
          "bunch",
          [15000, 15500, 16500, 17000, 17500, 18000],
        ],
        ["Maize grain", "kg", [1300, 1250, 1200, 1150, 1120, 1100]],
        ["Beans", "kg", [3200, 3300, 3300, 3400, 3500, 3600]],
        ["Tomatoes", "crate", [60000, 55000, 52000, 48000, 46000, 45000]],
        ["Eggs", "tray of 30", [10000, 10000, 10200, 10300, 10400, 10500]],
        [
          "Goat (live)",
          "each",
          [200000, 205000, 210000, 212000, 218000, 220000],
        ],
        ["Rabbit (live)", "each", [32000, 32000, 33000, 34000, 34500, 35000]],
      ];
      var listings = seed.slice();
      try {
        var s = JSON.parse(localStorage.getItem("soko_posts") || "[]");
        if (Array.isArray(s)) listings = s.concat(seed);
      } catch (e) {}
      function $(i) {
        return document.getElementById(i);
      }
      function fmt(n) {
        return "UGX " + Number(n).toLocaleString("en-UG");
      }
      function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
          return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
      }
      function opts(el, arr, first) {
        el.innerHTML =
          (first ? '<option value="">' + first + "</option>" : "") +
          arr
            .map(function (x) {
              return "<option>" + x + "</option>";
            })
            .join("");
      }
      opts($("fcat"), CATS, "All categories");
      opts($("fdist"), DISTS, "All districts");
      opts(document.querySelector("[name=cat]"), CATS);
      opts($("rdist"), DISTS);
      function wa(p) {
        var d = String(p).replace(/\D/g, "");
        if (d[0] === "0") d = "256" + d.slice(1);
        return "https://wa.me/" + d;
        // + "?text=" + encodeURIComponent("Hello, i saw your " + items + " on Soko Yaffe.");
      }
      function render() {
        var q = $("q").value.trim().toLowerCase(),
          c = $("fcat").value,
          d = $("fdist").value,
          so = $("fsort").value;
        var r = listings.filter(function (l) {
          return (
            (!SF || (l.stall || l.seller) === SF) &&
            (!c || l.cat === c) &&
            (!d || l.dist === d) &&
            (!q ||
              (l.item + " " + l.cat + " " + l.note + " " + l.dist)
                .toLowerCase()
                .indexOf(q) > -1)
          );
        });
        r.sort(function (a, b) {
          return so === "low"
            ? a.price - b.price
            : so === "high"
              ? b.price - a.price
              : b.t - a.t;
        });
        $("chip").hidden = !SF;
        $("chip").innerHTML = SF
          ? '<button class="btn line" id="clr" type="button">Stall: ' +
            esc(SF) +
            " ✕ Show all</button>"
          : "";
        $("count").textContent =
          r.length + " listing" + (r.length === 1 ? "" : "s") + " found";
        $("list").innerHTML = r.length
          ? r
              .map(function (l) {
                return (
                  '<article class="card"><span class="tag">' +
                  esc(l.cat) +
                  "</span><h3>" +
                  esc(l.item) +
                  '</h3><div class="price">' +
                  fmt(l.price) +
                  '</div><div class="meta">' +
                  esc(l.qty) +
                  " · " +
                  esc(l.dist) +
                  '</div><div class="meta">Stall: <a href="#" data-stall="' +
                  esc(l.stall || l.seller) +
                  '">' +
                  esc(l.stall || l.seller) +
                  "</a></div>" +
                  (l.note
                    ? '<p style="margin:0">' + esc(l.note) + "</p>"
                    : "") +
                  actions(l) +
                  "</article>"
                );
              })
              .join("")
          : '<div class="empty" style="grid-column:1/-1">No listings match. Try another district or category, or post your own.</div>';
      }
      function spark(v) {
        var w = 90,
          h = 28,
          mn = Math.min.apply(0, v),
          mx = Math.max.apply(0, v),
          rg = mx - mn || 1;
        var p = v
          .map(function (y, i) {
            return (
              (i * (w / (v.length - 1))).toFixed(1) +
              "," +
              (h - 2 - ((y - mn) / rg) * (h - 4)).toFixed(1)
            );
          })
          .join(" ");
        var col = v[v.length - 1] >= v[0] ? "var(--up)" : "var(--down)";
        return (
          '<svg width="' +
          w +
          '" height="' +
          h +
          '" viewBox="0 0 ' +
          w +
          " " +
          h +
          '" role="img" aria-label="Price trend"><polyline points="' +
          p +
          '" fill="none" stroke="' +
          col +
          '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        );
      }
      $("board").innerHTML = PRICES.map(function (p) {
        var v = p[2],
          n = v[v.length - 1],
          ch = ((n - v[v.length - 2]) / v[v.length - 2]) * 100;
        return (
          "<tr><td><strong>" +
          p[0] +
          "</strong></td><td>" +
          p[1] +
          "</td><td>" +
          fmt(n) +
          '</td><td class="' +
          (ch >= 0 ? "up" : "down") +
          '">' +
          (ch >= 0 ? "+" : "") +
          ch.toFixed(1) +
          "%</td><td>" +
          spark(v) +
          "</td></tr>"
        );
      }).join("");
      var tabs = ["buy", "sell", "prices", "help", "acct", "dash"];
      function show(n) {
        tabs.forEach(function (t) {
          var on = t === n;
          $("t-" + t).setAttribute("aria-selected", on);
          $("p-" + t).hidden = !on;
        });
        if (n === "sell") syncSell();
        if (n === "acct") syncAcct();
        if (n === "dash") renderDash();
        window.scrollTo({ top: 0 });
      }
      tabs.forEach(function (t) {
        $("t-" + t).addEventListener("click", function () {
          show(t);
        });
      });
      $("go").addEventListener("click", function () {
        show("buy");
        render();
      });
      $("q").addEventListener("input", render);
      $("q").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          show("buy");
          render();
        }
      });
      ["fcat", "fdist", "fsort"].forEach(function (i) {
        $(i).addEventListener("change", render);
      });
      function toast(m) {
        var t = $("toast");
        t.textContent = m;
        t.hidden = false;
        setTimeout(function () {
          t.hidden = true;
        }, 2600);
      }
      $("sellForm").addEventListener("submit", function (e) {
        e.preventDefault();
        if (!me || me.role !== "farmer") {
          toast("Log in as a farmer to post");
          show("acct");
          return;
        }
        var f = new FormData(e.target),
          o = { id: Date.now(), t: Date.now() };
        f.forEach(function (v, k) {
          o[k] = v;
        });
        o.price = Number(o.price);
        o.seller = me.name;
        o.stall = me.stall.name;
        o.dist = me.stall.dist;
        o.phone = me.stall.phone;
        o.owner = me.id;
        listings.unshift(o);
        save();
        e.target.reset();
        render();
        show("buy");
        toast("Listing posted");
      });
      var SF = "";
      var users = [];
      try {
        users = JSON.parse(localStorage.getItem("soko_users") || "[]");
        if (!Array.isArray(users)) users = [];
      } catch (e) {
        users = [];
      }
      var me = null;
      try {
        var sid = localStorage.getItem("soko_session");
        me =
          users.filter(function (u) {
            return u.id === sid;
          })[0] || null;
      } catch (e) {}
      function saveUsers() {
        try {
          localStorage.setItem("soko_users", JSON.stringify(users));
        } catch (e) {
          toast("Could not save. Check browser storage.");
        }
      }
      function save() {
        try {
          localStorage.setItem(
            "soko_posts",
            JSON.stringify(
              listings.filter(function (l) {
                return l.id > 1e6;
              }),
            ),
          );
        } catch (x) {}
      }
      function hash(p, salt) {
        var s = salt + ":" + p;
        if (window.crypto && crypto.subtle && window.TextEncoder) {
          return crypto.subtle
            .digest("SHA-256", new TextEncoder().encode(s))
            .then(function (b) {
              return Array.prototype.map
                .call(new Uint8Array(b), function (x) {
                  return ("0" + x.toString(16)).slice(-2);
                })
                .join("");
            });
        }
        return Promise.resolve(btoa(unescape(encodeURIComponent(s))));
      }
      function actions(l) {
        var h = '<div class="actions">';
        if (!me)
          return (
            h +
            '<button class="btn alt" type="button" data-login="1">Log in to contact seller</button></div>'
          );
        h +=
          '<a class="btn alt" href="tel:' +
          esc(l.phone) +
          '">Call</a><a class="btn line" href="' +
          wa(l.phone) +
          '" target="_blank" rel="noopener">WhatsApp</a>';
        if (l.owner && l.owner === me.id)
          h +=
            '<button class="btn line" type="button" data-del="' +
            l.id +
            '">Remove</button>';
        return h + "</div>";
      }
      function syncSell() {
        var ok = me && me.role === "farmer";
        $("sellForm").hidden = !ok;
        $("sellGate").hidden = !!ok;
        $("sellAs").textContent = ok
          ? "Posting to your stall: " +
            me.stall.name +
            " (" +
            me.stall.dist +
            ")"
          : "";
        $("gateMsg").textContent = me
          ? "You are logged in as a buyer. Register a farmer account (with a different email) to open a stall."
          : "Only registered farmers can post produce. Log in, or register to open your virtual stall.";
      }
      function syncAcct() {
        $("acctOut").hidden = !!me;
        $("acctIn").hidden = !me;
        $("whoBtn").textContent = me
          ? "Hi, " + me.name.split(" ")[0]
          : "Log in";
        if (!me) return;
        $("acctHi").textContent = "Welcome, " + me.name;
        var st = me.stall,
          n = listings.filter(function (l) {
            return l.owner === me.id;
          }).length;
        $("stallBox").innerHTML =
          me.role === "farmer" && st
            ? '<div class="card"><span class="tag">Your virtual stall</span><h3>' +
              esc(st.name) +
              '</h3><div class="meta">' +
              esc(st.dist) +
              " \u00b7 " +
              esc(st.phone) +
              "</div>" +
              (st.about
                ? '<p style="margin:0">' + esc(st.about) + "</p>"
                : "") +
              '<div class="meta">' +
              n +
              " active listing" +
              (n === 1 ? "" : "s") +
              '</div><div class="actions"><button class="btn alt" id="goSell" type="button">Post produce</button><button class="btn line" id="viewStall" type="button">View my stall</button></div></div>'
            : '<div class="card"><h3>Buyer account</h3><p style="margin:0">You can now call or WhatsApp any seller from the Buy tab.</p></div>';
      }
      function setMe(u) {
        me = u;
        try {
          u
            ? localStorage.setItem("soko_session", u.id)
            : localStorage.removeItem("soko_session");
        } catch (e) {}
        syncAcct();
        syncSell();
        renderDash();
        render();
      }
      document.addEventListener("click", function (e) {
        var t = e.target.closest(
          "[data-stall],[data-login],[data-del],#clr,#goSell,#viewStall,#logout,#whoBtn,[data-go]",
        );
        if (!t) return;
        if (t.hasAttribute("data-stall")) {
          e.preventDefault();
          SF = t.getAttribute("data-stall");
          show("buy");
          render();
        } else if (t.id === "clr") {
          SF = "";
          render();
        } else if (t.hasAttribute("data-login") || t.id === "whoBtn")
          show("acct");
        else if (t.hasAttribute("data-del")) {
          var id = Number(t.getAttribute("data-del"));
          if (confirm("Remove this listing?")) {
            listings = listings.filter(function (l) {
              return !(l.id === id && me && l.owner === me.id);
            });
            save();
            render();
            renderDash();
            syncAcct();
            toast("Listing removed");
          }
        } else if (t.hasAttribute("data-go")) show(t.getAttribute("data-go"));
        else if (t.id === "goSell") show("sell");
        else if (t.id === "viewStall") {
          SF = me.stall.name;
          show("buy");
          render();
        } else if (t.id === "logout") {
          setMe(null);
          show("buy");
          toast("Logged out");
        }
      });
      $("rrole").addEventListener("change", function () {
        var f = $("rrole").value === "farmer";
        $("stallFields").hidden = !f;
        ["sname", "rdist", "rphone"].forEach(function (i) {
          $(i).required = f;
        });
      });
      $("regForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var f = new FormData(e.target),
          em = String(f.get("email")).trim().toLowerCase(),
          farmer = f.get("role") === "farmer",
          sn = String(f.get("stall") || "").trim();
        if (
          users.some(function (u) {
            return u.email === em;
          })
        ) {
          toast("That email is already registered. Log in instead.");
          return;
        }
        if (
          farmer &&
          users.some(function (u) {
            return u.stall && u.stall.name.toLowerCase() === sn.toLowerCase();
          })
        ) {
          toast("That stall name is taken. Try another.");
          return;
        }
        var salt = String(Date.now()) + Math.random();
        hash(String(f.get("password")), salt).then(function (h) {
          var u = {
            id: "u" + Date.now(),
            role: farmer ? "farmer" : "buyer",
            name: String(f.get("name")).trim(),
            email: em,
            salt: salt,
            pass: h,
          };
          if (farmer)
            u.stall = {
              name: sn,
              dist: f.get("rdist"),
              phone: String(f.get("rphone")).trim(),
              about: String(f.get("about") || "").trim(),
            };
          users.push(u);
          saveUsers();
          e.target.reset();
          $("rrole").dispatchEvent(new Event("change"));
          setMe(u);
          show(farmer ? "acct" : "buy");
          toast(farmer ? "Stall opened" : "Account created");
        });
      });
      $("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var f = new FormData(e.target),
          em = String(f.get("email")).trim().toLowerCase(),
          u = users.filter(function (x) {
            return x.email === em;
          })[0];
        if (!u) {
          toast("Wrong email or password");
          return;
        }
        hash(String(f.get("password")), u.salt).then(function (h) {
          if (h !== u.pass) {
            toast("Wrong email or password");
            return;
          }
          e.target.reset();
          setMe(u);
          show(u.role === "farmer" ? "acct" : "buy");
          toast("Logged in");
        });
      });
      function bars(el, map) {
        var k = Object.keys(map).sort(function (a, b) {
            return map[b] - map[a];
          }),
          mx = map[k[0]] || 1;
        el.innerHTML =
          k
            .map(function (x) {
              return (
                '<div class="bar"><span>' +
                esc(x) +
                '</span><i style="width:' +
                (map[x] / mx) * 100 +
                '%"></i><b>' +
                map[x] +
                "</b></div>"
              );
            })
            .join("") || '<p class="meta">No data yet.</p>';
      }
      function stem(n) {
        return n
          .split(/[ (]/)[0]
          .toLowerCase()
          .replace(/(es|s)$/, "");
      }
      function market(l) {
        var t = String(l.item).toLowerCase();
        return PRICES.filter(function (p) {
          return t.indexOf(stem(p[0])) > -1;
        })[0];
      }
      function renderDash() {
        var ok = !!me;
        $("dashGate").hidden = ok;
        $("dashBody").hidden = !ok;
        if (!ok) return;
        var far = me.role === "farmer",
          mine = listings.filter(function (l) {
            return l.owner === me.id;
          });
        var cats = {},
          dists = {},
          stalls = {};
        listings.forEach(function (l) {
          cats[l.cat] = (cats[l.cat] || 0) + 1;
          dists[l.dist] = (dists[l.dist] || 0) + 1;
          stalls[l.stall || l.seller] = 1;
        });
        $("dashHi").textContent = far
          ? me.stall.name + " dashboard"
          : "Market dashboard";
        var above = 0,
          below = 0,
          rows = mine.map(function (l) {
            var m = market(l),
              d = "-",
              mk = "-";
            if (m) {
              var n = m[2][m[2].length - 1],
                pc = ((l.price - n) / n) * 100;
              mk = fmt(n) + " / " + esc(m[1]);
              d = (pc >= 0 ? "+" : "") + pc.toFixed(1) + "%";
              if (pc > 0) above++;
              else below++;
            }
            return (
              "<tr><td>" +
              esc(l.item) +
              "</td><td>" +
              fmt(l.price) +
              "</td><td>" +
              mk +
              "</td><td>" +
              d +
              '</td><td><button class="btn line" type="button" data-del="' +
              l.id +
              '">Remove</button></td></tr>'
            );
          });
        var k = [
          ["Listings on portal", listings.length],
          ["Stalls selling", Object.keys(stalls).length],
          ["Districts", Object.keys(dists).length],
        ];
        if (far)
          k = [
            ["Your listings", mine.length],
            ["Priced at or below market", below],
            ["Priced above market", above],
          ].concat(k.slice(0, 2));
        $("kpis").innerHTML = k
          .map(function (x) {
            return '<div class="kpi"><b>' + x[1] + "</b>" + x[0] + "</div>";
          })
          .join("");
        bars($("bCat"), cats);
        bars($("bDist"), dists);
        $("mineBox").innerHTML = !far
          ? '<div class="note">Want to sell? Register a farmer account to open a stall and compare your prices with the market.</div>'
          : mine.length
            ? '<h3 style="margin:0 0 8px">Your listings vs market price</h3><div class="scroll"><table><thead><tr><th>Product</th><th>Your price</th><th>Market today</th><th>Difference</th><th></th></tr></thead><tbody>' +
              rows.join("") +
              '</tbody></table></div><p class="meta">Market prices are averages from the price board. Check the unit matches before comparing.</p>'
            : '<div class="empty">You have no listings yet. <button class="btn alt" type="button" data-go="sell">Post produce</button></div>';
        var fm = {};
        listings.forEach(function (l) {
          var k = l.stall || l.seller,
            f = (fm[k] = fm[k] || {
              name: k,
              owner: l.seller,
              dist: l.dist,
              phone: l.phone,
              n: 0,
              cats: {},
            });
          f.n++;
          f.cats[l.cat] = 1;
        });
        users.forEach(function (u) {
          if (u.role === "farmer" && u.stall && !fm[u.stall.name])
            fm[u.stall.name] = {
              name: u.stall.name,
              owner: u.name,
              dist: u.stall.dist,
              phone: u.stall.phone,
              n: 0,
              cats: {},
            };
        });
        $("fRows").innerHTML = Object.keys(fm)
          .map(function (k) {
            return fm[k];
          })
          .sort(function (a, b) {
            return b.n - a.n;
          })
          .map(function (f) {
            return (
              '<tr><td><a href="#" data-stall="' +
              esc(f.name) +
              '">' +
              esc(f.name) +
              "</a></td><td>" +
              esc(f.owner) +
              "</td><td>" +
              esc(f.dist) +
              "</td><td>" +
              f.n +
              "</td><td>" +
              esc(Object.keys(f.cats).join(", ") || "-") +
              '</td><td><a class="btn alt" href="tel:' +
              esc(f.phone) +
              '">Call</a></td></tr>'
            );
          })
          .join("");
        var g = {};
        listings.forEach(function (l) {
          var k = stem(l.item);
          (g[k] = g[k] || []).push(l);
        });
        $("cRows").innerHTML = Object.keys(g)
          .map(function (k) {
            var a = g[k].slice().sort(function (x, y) {
                return x.price - y.price;
              }),
              m = market(a[0]),
              sum = a.reduce(function (t, l) {
                return t + l.price;
              }, 0),
              st = {};
            a.forEach(function (l) {
              st[l.stall || l.seller] = 1;
            });
            return (
              "<tr><td><strong>" +
              esc(a[0].item) +
              "</strong></td><td>" +
              Object.keys(st).length +
              "</td><td>" +
              fmt(a[0].price) +
              "</td><td>" +
              fmt(Math.round(sum / a.length)) +
              "</td><td>" +
              fmt(a[a.length - 1].price) +
              "</td><td>" +
              esc(a[0].stall || a[0].seller) +
              "</td><td>" +
              (m ? fmt(m[2][m[2].length - 1]) + " / " + esc(m[1]) : "-") +
              "</td></tr>"
            );
          })
          .join("");
        $("aRows").innerHTML = listings
          .slice()
          .sort(function (a, b) {
            return b.t - a.t;
          })
          .map(function (l) {
            return (
              "<tr><td><strong>" +
              esc(l.item) +
              "</strong></td><td>" +
              esc(l.cat) +
              "</td><td>" +
              esc(l.qty) +
              "</td><td>" +
              fmt(l.price) +
              '</td><td><a href="#" data-stall="' +
              esc(l.stall || l.seller) +
              '">' +
              esc(l.stall || l.seller) +
              "</a></td><td>" +
              esc(l.dist) +
              '</td><td><a class="btn alt" href="tel:' +
              esc(l.phone) +
              '">Call</a></td></tr>'
            );
          })
          .join("");
        $("movers").innerHTML = PRICES.map(function (p) {
          var v = p[2],
            n = v[v.length - 1],
            c = ((n - v[v.length - 2]) / v[v.length - 2]) * 100;
          return { p: p, n: n, c: c };
        })
          .sort(function (a, b) {
            return Math.abs(b.c) - Math.abs(a.c);
          })
          .map(function (r) {
            return (
              "<tr><td><strong>" +
              r.p[0] +
              "</strong></td><td>" +
              fmt(r.n) +
              " / " +
              r.p[1] +
              '</td><td class="' +
              (r.c >= 0 ? "up" : "down") +
              '">' +
              (r.c >= 0 ? "+" : "") +
              r.c.toFixed(1) +
              "%</td></tr>"
            );
          })
          .join("");
      }
      syncAcct();
      syncSell();
      render();