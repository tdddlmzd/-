<style lang="scss">
.container-fluid.fileupload {
    width: inherit !important;
}
</style>

<template>
  <div class="download-template content ">
    <!-- Start Content-->
    <div class="container-fluid fileupload">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title m-t-0">Dropzone File Upload</h4>
              <p
                class="text-muted font-13 m-b-30"
              >DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>

              <form
                action="/"
                method="post"
                class="dropzone"
                id="myAwesomeDropzone"
                data-plugin="dropzone"
                data-previews-container="#file-previews"
                data-upload-preview-template="#uploadPreviewTemplate"
              >
                <div class="fallback">
                  <input name="file" type="file" multiple />
                </div>

                <div class="dz-message needsclick">
                  <p class="h1 text-muted">
                    <i class="mdi mdi-cloud-upload"></i>
                  </p>
                  <h3>Drop files here or click to upload.</h3>
                  <span class="text-muted font-13">
                    (This is just a demo dropzone. Selected files are
                    <strong>not</strong> actually uploaded.)
                  </span>
                </div>
              </form>

              <!-- Preview -->
              <div class="dropzone-previews mt-3" id="file-previews"></div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col-->
      </div>
      <!-- end row -->

      <!-- file preview template -->
      <div class="d-none" id="uploadPreviewTemplate">
        <div class="card mt-1 mb-0 shadow-none border">
          <div class="p-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <img data-dz-thumbnail class="avatar-sm rounded bg-light" alt />
              </div>
              <div class="col pl-0">
                <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                <p class="mb-0" data-dz-size></p>
              </div>
              <div class="col-auto">
                <!-- Button -->
                <a href class="btn btn-link btn-lg text-muted" data-dz-remove>
                  <i class="mdi mdi-close-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- container -->
  </div>
  <!-- content -->
</template>

<script>
import {dropzone} from "@assets/libs/dropzone/dropzone.js" ;
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
