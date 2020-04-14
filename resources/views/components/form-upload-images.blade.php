<div>
    <div class="form-group">
        <input type="file" id="images" class="form-control @error('images[]') is-invalid @enderror"
            placeholder="Upload Images" name="images[]" aria-label="Upload Images" multiple>
        @error('images')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        <small class="form-text text-muted" for="cover">Click to Upload Images for
            Gallery</small>
        @enderror
    </div>
    <div class="form-group">
        <h5 class="card-title">Add Images</h5>
        <p class="card-text">Fill up the form to upload images</p>
        <button type="submit" class="btn btn-primary">Upload Images</button>
    </div>
</div>