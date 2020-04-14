<?php

namespace App\Providers;

use App\Gallery;
use App\Image;
use App\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Gallery' => 'App\Policies\GalleryPolicy',
        'App\Image' => 'App\Policies\ImagePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('delete-image', function (User $user, Image $image) {
            return $image->gallery->user_id === $user->id;
        });
    }
}
