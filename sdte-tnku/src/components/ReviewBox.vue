<template>
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-start align-items-center">
              <img
                class="rounded-circle shadow-1-strong me-3"
                src="https://i.imgur.com/AD3MbBi.jpeg"
                alt="avatar"
                width="60"
                height="60"
              />
              <div>
                <h6 class="fw-bold text-primary mb-1">{{this.name}}</h6>
                <p class="text-muted small mb-0">
                  Score : {{this.score}}/5
                </p>
              </div>
            </div>

            <p class="mt-3 mb-4 pb-2">
              {{this.msg}}
            </p>

          </div>
        </div>
</template>

<script>
export default {
    name: 'ReviewBox',
    props: {
        name: String,
        msg: String,
        score: Number,
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 200px;
    padding: 10px;
}

</style>