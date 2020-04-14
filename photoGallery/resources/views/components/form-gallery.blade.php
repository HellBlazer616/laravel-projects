<div>
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control @error('title') is-invalid @enderror" id="title"
            name="title">
        @error('title')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        @enderror
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control @error('description') is-invalid @enderror " id="description"
            rows="3" name="description"></textarea>
        @error('description')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        @enderror
    </div>
    </form>
    <div class="form-group">
        <input type="file" id="cover" class="form-control @error('cover') is-invalid @enderror"
            placeholder="Upload file" name="cover" aria-label="Upload file"
            aria-describedby="basic-addon2">
        @error('cover')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        <small class="form-text text-muted" for="cover">Click to Upload Cover Image for
            Gallery</small>
        @enderror
    </div>
    <div class="form-group">
        <h5 class="card-title">Create Gallery</h5>
        <p class="card-text">Fill up the form to create a gallery</p>
        <button type="submit" class="btn btn-primary">Create Gallery</button>
    </div>
</div>