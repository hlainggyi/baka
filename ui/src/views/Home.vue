<template>  
  <v-container fluid pa-0 v-if="!isUserLoggedIn">
    <v-responsive class="white--text py-5" style="background:linear-gradient(to bottom, #41b883, #4CAF50);">
      <v-container>
        <v-layout row wrap align-center justify-center>
           <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-responsive>
      <v-container grid-list-xs>
        
        <v-layout row wrap align-center justify-center>
          <div class="v-card v-card--flat v-sheet theme--light grey lighten-4 pa-5 text-xs-center"><div class="subtitle-1 title font-weight-regular">
            Patreon Sponsors
          </div><section id="patrons" class="layout align-center wrap mb-5"><div class="flex"><div class="container fluid grid-list-md pa-0"><div large="true" class="layout align-center justify-center wrap mb-0"><h3 class="flex font-weight-medium grey--text xs12"></h3><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="https://careers.lmax.com/?utm_source=vuetify&amp;utm_medium=logo-link&amp;utm_campaign=lmax-careers" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:195px;"><div><div role="img" aria-label="Supporter LMAX Exchange" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 31.8182%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/lmax-exchange.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="http://intygrate.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:195px;"><div><div role="img" aria-label="Supporter Intygrate" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 22.293%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/intygrate.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="http://resaleai.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:195px;"><div><div role="img" aria-label="Supporter ResaleAI" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 26%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/resaleai_logo_blue.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div></div><div class="layout align-center justify-center wrap mb-0"><h3 class="flex font-weight-medium grey--text xs12"></h3><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="https://application.rategenius.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:160px;"><div><div role="img" aria-label="Supporter rateGenius" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 26.2195%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/rate-genius.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="http://www.clearbluetechnologies.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:160px;"><div><div role="img" aria-label="Supporter Clearblue Technologies" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 27.1429%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/clear-blue.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://www.digitalmaas.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:160px;"><div><div role="img" aria-label="Supporter DigitalMaas" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 30%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/digital-maas.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://www.fractalindustries.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:160px;"><div><div role="img" aria-label="Supporter Fractal Industries" class="v-responsive v-image" style="height:70px;"><div class="v-responsive__sizer" style="padding-bottom: 33.1818%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/fractal-industries.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div></div><div small="" class="layout align-center justify-center wrap mb-0"><h3 class="flex font-weight-medium grey--text xs12"></h3><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="http://www.deister.es/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Deister Software" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 17.623%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/deister-logo-light.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://www.cycloid.io/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Cycloid" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 33.2%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/cycloid.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="http://zweidenker.de/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Zweidenker" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 15.3094%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/zweidenker-logo-grey.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://support.identitypanel.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Identity Panel" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 11.25%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/identity-panel.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="https://www.hohenstein.de/en/home/home.xhtml" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Hohenstein" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 10.3333%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/hohenstein.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://p2l.tech/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter P2L Technologies" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 41.25%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/p2l.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://www.madhead.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter madhead" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 17.5%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/madhead.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="http://www.elfo.net/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Elfo" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 38.4824%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/elfo.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="https://www.codefirst.co.uk/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter CodeFirst" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 40%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/code-first.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://www.customessaymeister.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Custom Essay Meister" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 54.3478%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/essay-meister.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://note.riot.ai/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter NoteRiot" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 31.1688%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/note-riot.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><!----><div class="flex d-flex shrink"><a href="https://blokt.com/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter blokt" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 33.0882%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/blokt.png&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div><div class="flex xs12"></div><div class="flex d-flex shrink"><a href="https://www.loomio.org/" target="_blank" rel="noopener" class="d-inline-flex mx-2 v-card v-card--flat v-sheet v-sheet--tile theme--light transparent" style="width:130px;"><div><div role="img" aria-label="Supporter Loomio" class="v-responsive v-image" style="height:40px;"><div class="v-responsive__sizer" style="padding-bottom: 25.9128%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/backers/loomio.svg&quot;); background-position: center center;"></div><div class="v-responsive__content"></div></div></div></a></div></div><!----><!----></div></div></section><div class="subtitle-1 title font-weight-regular mb-5">
            Open Collective Sponsors
          </div><a href="/en/getting-started/sponsors-and-backers" rel="noopener" append="" large="" class="v-btn v-btn--large v-btn--outline v-btn--depressed v-btn--router theme--light primary--text"><div class="v-btn__content"><span class="caption font-weight-bold">
            Become a Sponsor
          </span></div></a></div>
        </v-layout>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
    }
  }, 
  computed: {
    ...mapState({
      app: state => state.app,
      user: state => state.user,
      isUserLoggedIn: state => state.isUserLoggedIn
    })
  }
}
</script>