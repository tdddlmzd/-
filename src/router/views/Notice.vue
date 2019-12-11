<style scoped>
.content.download-template {
  padding-top: 20px;
}
.container-fluid {
  width: 1200px !important;
  margin: 0 auto;
}
.download-template .card-box {
  padding-top: 0;
}
.download-template .message-list li .col-mail-2 {
  left: 210px !important;
}
.download-template .message-list li .col-mail-1 {
  width: 210px !important;
}
.download-template .message-list li .col-mail-1 .title {
  left: 40px;
  right: 10px;
  text-align: left;
}
.notice-link.nav-link.dropdown-toggle.waves-effect.waves-light {
  background-color: rgba(255, 255, 255, 0.15);
}
.my-list-notice {
  position: relative;
  top: 50px;
}
</style>

<template>
  <div id="mine">
    <Head ref="head"></Head>
    <div class="my-list-notice">
      <div class="download-template content">
        <div class="container-fluid">
          <div class="row">
            <!-- Right Sidebar -->
            <div class="col-12">
              <div class="card-box">
                <!-- Left sidebar -->
                <div class="inbox-leftbar">
                  <div class="mail-list mt-4">
                    <a href="#" class="list-group-item border-0 text-danger font-weight-bold">
                      <i class="mdi mdi-inbox font-18 align-middle mr-2"></i>未读消息
                      <span class="badge badge-danger float-right ml-2 mt-1">8</span>
                    </a>
                    <a href="#" class="list-group-item border-0">
                      <i class="mdi mdi-star font-18 align-middle mr-2"></i>已读消息
                    </a>
                  </div>

                  <h6 class="mt-4">标签</h6>

                  <div class="list-group b-0 mail-list">
                    <a href="#" class="list-group-item border-0">
                      <span class="mdi mdi-circle text-info mr-2"></span>系统消息
                    </a>
                    <a href="#" class="list-group-item border-0">
                      <span class="mdi mdi-circle text-warning mr-2"></span>产品升级
                    </a>
                  </div>
                </div>
                <!-- End Left sidebar -->

                <div class="inbox-rightbar">
                  <div class="mt-3">
                    <ul class="message-list">
                      <li class="unread">
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">Lucas Kriebel (via Twitter)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Lucas Kriebel (@LucasKriebel) has sent
                            you a direct message on Twitter! &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                          </a>
                          <div class="date">11:49 am</div>
                        </div>
                      </li>

                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Randy, me (5)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Last pic over my village &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                          </a>
                          <div class="date">5:01 am</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">Andrew Zimmer</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Mochila Beta: Subscription Confirmed
                            &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                          </a>
                          <div class="date">Mar 8</div>
                        </div>
                      </li>
                      <li class="unread">
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Infinity HR</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Sveriges Hetaste sommarjobb &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                          </a>
                          <div class="date">Mar 8</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Web Support Dennis</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Re: New mail settings &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Will you answer him asap?</span>
                          </a>
                          <div class="date">Mar 7</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">me, Peter (2)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Off on Thursday &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm</span>
                          </a>
                          <div class="date">Mar 4</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Medium</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            This Week's Top Stories &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                          </a>
                          <div class="date">Feb 28</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">Death to Stock</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Montly High-Res Photos &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                          </a>
                          <div class="date">Feb 28</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Revibe</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Weekend on Revibe &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                          </a>
                          <div class="date">Feb 27</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Erik, me (5)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Regarding our meeting &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >That's great, see you on Thursday!</span>
                          </a>
                          <div class="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">KanbanFlow</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Task assigned: Clone ARP's website
                            &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >You have been assigned a task by Alex@Work on the board Web.</span>
                          </a>
                          <div class="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Tobias Berggren</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Let's go fishing! &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                          </a>
                          <div class="date">Feb 23</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">Charukaw, me (7)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Hey man &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Nah man sorry i don't. Should i get it?</span>
                          </a>
                          <div class="date">Feb 23</div>
                        </div>
                      </li>
                      <li class="unread">
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">me, Peter (5)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Home again! &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >That's just perfect! See you tomorrow.</span>
                          </a>
                          <div class="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Stack Exchange</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            1 new items in your Stackexchange inbox
                            &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                          </a>
                          <div class="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star text-warning"></span>
                          <a href class="title">Google Drive Team</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            You can now use your storage in Google
                            Drive &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                          </a>
                          <div class="date">Feb 20</div>
                        </div>
                      </li>
                      <li class="unread">
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">me, Susanna (11)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Train/Bus &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.</span>
                          </a>
                          <div class="date">Feb 19</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">Peter, me (3)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Hello &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                          </a>
                          <div class="date">Mar. 6</div>
                        </div>
                      </li>
                      <li>
                        <div class="col-mail col-mail-1">
                          <span class="star-toggle far fa-star"></span>
                          <a href class="title">me, Susanna (7)</a>
                        </div>
                        <div class="col-mail col-mail-2">
                          <a href class="subject">
                            Since you asked... and i'm
                            inconceivably bored at the train station &nbsp;–&nbsp;
                            <span
                              class="teaser"
                            >Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                          </a>
                          <div class="date">Mar. 6</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!-- end .mt-4 -->

                  <div class="row">
                    <div class="col-7 mt-1">Showing 1 - 20 of 289</div>
                    <!-- end col-->
                    <div class="col-5">
                      <div class="btn-group float-right">
                        <button type="button" class="btn btn-light btn-sm">
                          <i class="mdi mdi-chevron-left"></i>
                        </button>
                        <button type="button" class="btn btn-info btn-sm">
                          <i class="mdi mdi-chevron-right"></i>
                        </button>
                      </div>
                    </div>
                    <!-- end col-->
                  </div>
                  <!-- end row-->
                </div>
                <!-- end inbox-rightbar-->

                <div class="clearfix"></div>
              </div>
              <!-- end card-box -->
            </div>
            <!-- end Col -->
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";

export default {
  name: "Notice",
  data() {
    return {
      loading: false
    };
  },
  components: {
    Head,
    Footer
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>