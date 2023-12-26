#!/bin/bash

# Path to store the configuration file
CONFIG_FILE="/etc/nginx/sites-available/dheeraj.ezxdemo.com.conf"
ENABLED_CONFIG_FILE="/etc/nginx/sites-enabled/dheeraj.ezxdemo.com.conf"

# Define your base server configuration
cat <<EOF > "$CONFIG_FILE"
server {
    listen 80;
    server_name dheeraj.ezxdemo.com;
    root /var/lib/jenkins/workspace/Docker;

    # Default location for unknown paths
    location / {
        return 404;
    }

EOF

# Get running containers and generate proxy configurations
docker ps --format '{{.Names}}' | while read -r container; do
    port=$(docker port "$container" | awk -F':' '{ print $2 }')
    cat <<EOF >> "$CONFIG_FILE"
    # Container-specific location block for $container
    location /$container {
        proxy_pass http://127.0.0.1:$port;
        # Additional proxy settings if required
    }
EOF
done

# Close the server block in the configuration file
echo "}" >> "$CONFIG_FILE"

# Test the configuration and create symbolic link
nginx -t  # Test the configuration

if [ $? -eq 0 ]; then
    ln -sf "$CONFIG_FILE" "$ENABLED_CONFIG_FILE"  # Create symbolic link
    nginx -s reload  # Reload Nginx to apply the changes
else
    echo "Configuration test failed. Please check the syntax in $CONFIG_FILE"
fi

