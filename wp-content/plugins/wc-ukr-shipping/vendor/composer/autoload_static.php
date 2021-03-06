<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5be25894e7a7f2418a80af0f4cf6e395
{
    public static $prefixLengthsPsr4 = array (
        'k' => 
        array (
            'kirillbdev\\WCUkrShipping\\' => 25,
            'kirillbdev\\WCUSCore\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'kirillbdev\\WCUkrShipping\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'kirillbdev\\WCUSCore\\' => 
        array (
            0 => __DIR__ . '/..' . '/kirillbdev/wcus-core/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5be25894e7a7f2418a80af0f4cf6e395::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5be25894e7a7f2418a80af0f4cf6e395::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5be25894e7a7f2418a80af0f4cf6e395::$classMap;

        }, null, ClassLoader::class);
    }
}
