<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-1>Game center</b-button>
      <b-sidebar
        bg-variant="dark"
        text-variant="light"
        id="sidebar-1"
        title="Game center"
        shadow
      >
        <div class="px-3 py-2">
          <ul>
            <li>Первый пункт</li>
            <li>Второй пункт</li>
            <li>Третий пункт</li>
            <li>Первый пункт</li>
            <li>Второй пункт</li>
            <li>Третий пункт</li>
            <li>Первый пункт</li>
            <li>Второй пункт</li>
            <li>Третий пункт</li>
          </ul>

          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>

      <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
      <b-sidebar
        bg-variant="dark"
        text-variant="light"
        id="sidebar-right"
        title="Sidebar"
        right
        shadow
      >
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      formatted: '',
      selected: '',
    };
  },
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>
