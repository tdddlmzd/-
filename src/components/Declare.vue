<template>
<!-- 船期，跟踪列表页免责声明部分 -->
  <div id="declare">
    <div class="declare-box-top"></div>
    <!-- 箱货跟踪免责声明 -->
    <div class="declare" v-if="this.$route.fullPath == '/track' || this.$route.name == 'Track' || this.$route.name == 'TrackDetail'">
      <h5>{{ $t('tracks.trackingDisclaimerHeader') }}</h5> 
      <p>
        {{ $t('tracks.trackingDisclaimer') }}
      </p>
    </div>
    <!-- 全球船期免责声明 -->
    <div class="declare" v-else>
      <h5>{{ $t('list.shipScheduleDisclaimerHeader') }}</h5> 
      <p>
        {{ $t('list.shipScheduleDisclaimer') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
