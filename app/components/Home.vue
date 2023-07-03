<template>
  <Page style="background-color:#223240">
    <ActionBar style="background-color:#223240">
      <Image src="https://cdn.discordapp.com/attachments/910979743137009714/1125413804734427326/bitmapa.png" stretch="none"/>
      <Label class="lato" text="Touch Grass" />
    </ActionBar>

    <GridLayout columns="100, *" rows="115, 115">
      <Button @tap="refreshOnTap">
        <FormattedString>
          <Span text="Refresh" />
        </FormattedString>
      </Button>

      <Label row="0" col="1" class="info">
        <FormattedString>
          <Span class="lato" :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
const { getYoutubeUsageTime } = require("../youtubeUtil.js");

export default {
  computed: {
    message() {
      return "Czas dla aplikacji YouTube: "+getYoutubeUsageTime();
    },
  },
  methods: {
    refreshOnTap() {
      console.log("\nrefreshing message\n");
      this.message = "Czas dla aplikacji YouTube: "+getYoutubeUsageTime();
      console.log("\ndone refreshing message\n");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}

</style>
